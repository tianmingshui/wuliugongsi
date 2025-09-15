import Link from 'next/link'
import { Truck, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">速达物流</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专业的物流服务提供商，致力于为客户提供高效、安全、可靠的物流解决方案。
              我们拥有先进的物流网络和专业的服务团队，为您的货物运输保驾护航。
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Globe className="h-4 w-4 mr-1" />
                <span>服务覆盖全国</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-1" />
                <span>24小时服务</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  服务项目
                </Link>
              </li>
              <li>
                <Link href="#tracking" className="text-gray-300 hover:text-white transition-colors">
                  物流追踪
                </Link>
              </li>
              <li>
                <Link href="#cases" className="text-gray-300 hover:text-white transition-colors">
                  客户案例
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>service@suda-logistics.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>北京市朝阳区建国路88号SOHO现代城</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 速达物流. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              服务条款
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}