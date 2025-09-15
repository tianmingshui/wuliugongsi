import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Truck, Package, Globe, Clock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              专业物流服务
              <span className="text-primary block">让货物运输更简单</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              速达物流为您提供全方位的物流解决方案，覆盖全国范围的运输网络，
              确保您的货物安全、准时送达。专业团队，先进技术，让物流变得简单高效。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-3">
                立即咨询
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                查看服务
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-600">年行业经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">服务城市</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-600">准时率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">全天候服务</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">快速运输</h3>
                <p className="text-sm text-gray-600">高效配送网络</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">安全可靠</h3>
                <p className="text-sm text-gray-600">全程货物保障</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">全国覆盖</h3>
                <p className="text-sm text-gray-600">广泛服务网络</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">实时追踪</h3>
                <p className="text-sm text-gray-600">货物状态监控</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}