#
# Be sure to run `pod lib lint LibraryFoundation.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'LibraryFoundation'
  s.version          = '0.1.0'
  s.summary          = 'A short description of LibraryFoundation.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.description      = <<-DESC
TODO: Add long description of the pod here.
                       DESC

  s.homepage         = 'https://github.com/airfight/LibraryFoundation'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'airfight' => 'gy.zhu@easy.com' }
  s.source           = { :git => 'https://github.com/airfight/LibraryFoundation.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '8.0'
  
  s.libraries = 'bz2', 'z', 'stdc++'
  
  s.subspec 'FileManager' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/FileManager/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/FileManager/*.h'
    
  end
  
 
  
  s.subspec 'Foundation' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/Foundation/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/Foundation/*.h'
    
  end
  
  s.subspec 'Navigation' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/Navigation/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/Navigation/*.h'
    
  end
  
  s.subspec 'STExtensions' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/STExtensions/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/STExtensions/*.h'
    
  end
  
  s.subspec 'Thread' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/Thread/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/Thread/*.h'
    
  end
  
  s.subspec 'Tools' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/Tools/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/Tools/*.h'
    
  end
  
  s.subspec 'UIKit' do |ss|
    ss.source_files = 'LibraryFoundation/Classes/UIKit/*.{h,m}'
    ss.public_header_files = 'LibraryFoundation/Classes/UIKit/*.h'
    
  end
  
  
  
  s.dependency 'SSZipArchive','2.1.4'
end
