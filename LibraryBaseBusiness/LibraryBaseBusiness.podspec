#
# Be sure to run `pod lib lint LibraryBaseBusiness.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'LibraryBaseBusiness'
  s.version          = '0.1.0'
  s.summary          = 'A short description of LibraryBaseBusiness.'

# This description is used to generate tags and improve search results.
#   * Think: What does it do? Why did you write it? What is the focus?
#   * Try to keep it short, snappy and to the point.
#   * Write the description between the DESC delimiters below.
#   * Finally, don't worry about the indent, CocoaPods strips it!

  s.description      = <<-DESC
TODO: Add long description of the pod here.
                       DESC

  s.homepage         = 'https://github.com/airfight/LibraryBaseBusiness'
  # s.screenshots     = 'www.example.com/screenshots_1', 'www.example.com/screenshots_2'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'airfight' => 'gy.zhu@easy.com' }
  s.source           = { :git => 'https://github.com/airfight/LibraryBaseBusiness.git', :tag => s.version.to_s }
  # s.social_media_url = 'https://twitter.com/<TWITTER_USERNAME>'

  s.ios.deployment_target = '8.0'

  s.source_files = 'LibraryBaseBusiness/Classes/*.{h,m}'
  s.public_header_files = 'LibraryBaseBusiness/Classes/*.h'
  s.subspec 'Communication' do |ss|
     ss.source_files = 'LibraryBaseBusiness/Classes/Communication/*.{h,m}'
     ss.public_header_files = 'LibraryBaseBusiness/Classes/Communication/*.h'
     
   end
  # s.resource_bundles = {
  #   'LibraryBaseBusiness' => ['LibraryBaseBusiness/Assets/*.png']
  # }

  # s.frameworks = 'UIKit', 'MapKit'
  # s.dependency 'AFNetworking', '~> 2.3'
  s.dependency 'LibraryFoundation'
end
