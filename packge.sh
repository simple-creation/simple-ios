#cd $WORKSPACE

# 项目的根目录路径
PROJECT_PATH="$( cd "$( dirname "$0"  )" && pwd  )";
PROJECT_TYPE="xcworkspace"

echo "开始打包"
function getFileName(){

  for file in $(ls $PROJECT_PATH)
  do
    local lastFileName=${file##*.}
    if [[ $lastFileName =~ $PROJECT_TYPE ]]
    then
      TARGET_NAME=$(basename ${file} .$PROJECT_TYPE)
    fi
  done
}

# 计时
SECONDS=0
# 是否编译工作空间 (例:若是用Cocopods管理的.xcworkspace项目,赋值true;用Xcode默认创建的.xcodeproj,赋值false)
is_workspace="true"

# 指定项目的scheme名称
# (注意: 因为shell定义变量时,=号两边不能留空格,若scheme_name与info_plist_name有空格,脚本运行会失败)
scheme_name="ManicureUser"

# 工程中Target对应的配置plist文件名称, Xcode默认的配置文件为Info.plist
info_plist_name="Info"

# 指定要打包编译的方式 : Release,Debug...
build_configuration="Debug"



# ===============================自动打包部分(如果Info.plist文件位置有变动需要修改"info_plist_path")============================= #

# 导出ipa所需要的plist文件路径，这个路径为之前存放ExportOptions.plist的路径，如果放在源码工程文件的根目录，直接填文件名即可。
ExportOptionsPlistPath="$PROJECT_PATH/DevelopmentExportOptionsPlist.plist"
echo $build_configuration

# 获取项目名称
#project_name=`find . -name *.xcodeproj | awk -F "[/.]" '{print $(NF-1)}'`
project_name="xx"
echo $project_name
# 获取Info.plist路径，拿到版本号, 编译版本号, BundleID
#info_plist_path="$project_name/$info_plist_name.plist"
#bundle_version=`/usr/libexec/PlistBuddy -c "Print CFBundleShortVersionString" $info_plist_path`
#bundle_build_version=`/usr/libexec/PlistBuddy -c "Print CFBundleVersion" $info_plist_path`
#bundle_identifier=`/usr/libexec/PlistBuddy -c "Print CFBundleIdentifier" $info_plist_path`

#获取BundleID
#PRODUCT_BUNDLE_IDENTIFIER=`sed -n '/PRODUCT_BUNDLE_IDENTIFIER/{s/PRODUCT_BUNDLE_IDENTIFIER = //;s/;//;s/^[[:space:]]*//;p;q;}' ./${project_name}.xcodeproj/project.pbxproj`
#
##获取Version
#VERSION_NUMBER=`sed -n '/MARKETING_VERSION/{s/MARKETING_VERSION = //;s/;//;s/^[[:space:]]*//;p;q;}' ./${project_name}.xcodeproj/project.pbxproj`

#时间戳
formattedDate=$(date "+%Y-%m-%d#%H:%M:%S")

# 指定输出ipa名称 : scheme_name + bundle_version
ipa_name="$scheme_name$formattedDate"

# 删除旧.xcarchive文件
rm -rf ~/Documents/IPA/$scheme_name-IPA/$scheme_name.xcarchive

# 指定输出ipa路径
export_path=~/Documents/IPA/$scheme_name/$ipa_name

# 指定输出归档文件地址
export_archive_path="$export_path/$ipa_name.xcarchive"

# 指定输出ipa地址
export_ipa_path="$export_path"

# 四种打包方式: AdHoc、AppStore、Enterprise和Development
method="Development"

echo "\033[*************************  开始构建项目  *************************]\033"
# 指定输出文件目录不存在则创建
if [ -d "$export_path" ] ; then
echo $export_path
else
mkdir -pv $export_path
fi
pwd
# 判断编译的项目类型是workspace还是project
#if $is_workspace ; then

# 安装第三方库
#pod install --verbose --no-repo-update

# 编译前清理工程
xcodebuild clean -workspace ${project_name}.xcworkspace \
                 -scheme ${scheme_name} \
                 -configuration ${build_configuration}

xcodebuild archive -workspace ${project_name}.xcworkspace \
                   -scheme ${scheme_name} \
                   -configuration ${build_configuration} \
                   -archivePath ${export_archive_path} \
                   | xcpretty

#else
## 编译前清理工程
#xcodebuild clean -project ${project_name}.xcodeproj \
#                 -scheme ${scheme_name} \
#                 -configuration ${build_configuration}
#
#xcodebuild archive -project ${project_name}.xcodeproj \
#                   -scheme ${scheme_name} \
#                   -configuration ${build_configuration} \
#                   -archivePath ${export_archive_path} \
#                   | xcpretty
#fi

#  检查是否构建成功
#  xcarchive 实际是一个文件夹不是一个文件所以使用 -d 判断
if [ -d "$export_archive_path" ] ; then
echo "\033[项目构建成功] \033"
else
echo "\033[项目构建失败] \033"
exit 1
fi

echo "\033[*************************  开始导出ipa文件  *************************]\033"
xcodebuild  -exportArchive \
            -archivePath ${export_archive_path} \
            -exportPath ${export_ipa_path} \
            -exportOptionsPlist ${ExportOptionsPlistPath} \
            -allowProvisioningUpdates \
            -allowProvisioningDeviceRegistration \
#            CODE_SIGN_IDENTITY="iPhone Distribution: xxx (xxx)"

# 修改ipa文件名称
mv $export_ipa_path/$scheme_name.ipa $export_ipa_path/$ipa_name.ipa

# 检查文件是否存在
if [ -f "$export_ipa_path/$ipa_name.ipa" ] ; then
echo "\033[导出 ${ipa_name}.ipa 包成功]\033"
open $export_path
else
echo "\033[导出 ${ipa_name}.ipa 包失败]\033"

exit 1
fi
# 输出打包总用时
echo "\033[打包总用时: ${SECONDS}s]\033"


# 执行上传至fir.im的命令
# echo "[************************* uploading *************************]"

# fir.im上的API Token
# API_TOKEN="xxx"

# 要上传的ipa文件路径
# IPA_PATH="$export_ipa_path/$ipa_name.ipa"

#上传到fir
# fir publish $IPA_PATH -T $API_TOKEN

