import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Truck, 
  Package, 
  Warehouse, 
  Plane, 
  Ship, 
  Train,
  Clock,
  Shield
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: '公路运输',
      description: '覆盖全国的公路运输网络，提供门到门配送服务',
      features: ['整车运输', '零担运输', '城市配送', '冷链运输'],
      color: 'text-blue-600'
    },
    {
      icon: Plane,
      title: '航空运输',
      description: '快速高效的航空货运服务，满足紧急运输需求',
      features: ['国内空运', '国际空运', '急件速递', '危险品运输'],
      color: 'text-purple-600'
    },
    {
      icon: Ship,
      title: '海运服务',
      description: '专业的海运代理服务，覆盖全球主要港口',
      features: ['整箱运输', '拼箱运输', '散货运输', '港口服务'],
      color: 'text-cyan-600'
    },
    {
      icon: Train,
      title: '铁路运输',
      description: '经济实惠的铁路运输方案，适合大宗货物运输',
      features: ['整车铁路', '集装箱铁路', '大宗散货', '多式联运'],
      color: 'text-green-600'
    },
    {
      icon: Warehouse,
      title: '仓储服务',
      description: '现代化仓储设施，提供专业的仓储管理服务',
      features: ['普通仓储', '冷链仓储', '危险品仓储', '跨境仓储'],
      color: 'text-orange-600'
    },
    {
      icon: Package,
      title: '快递服务',
      description: '快速便捷的快递服务，满足小件物品配送需求',
      features: ['同城快递', '异地快递', '国际快递', '代收货款'],
      color: 'text-red-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            我们的服务项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            提供全方位的物流服务，满足不同客户的多样化需求
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  了解详情
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">为什么选择我们？</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">时效保障</h4>
                    <p className="text-gray-600 text-sm">98%的准时率，承诺超时赔付</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">安全保障</h4>
                    <p className="text-gray-600 text-sm">全程货物保险，专业风险管控</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Package className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">全程追踪</h4>
                    <p className="text-gray-600 text-sm">实时货物追踪，透明化服务</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">需要定制化物流方案？</h4>
              <p className="text-gray-600 mb-6">
                我们的专业团队将根据您的具体需求，
                为您量身定制最适合的物流解决方案。
              </p>
              <Button size="lg">
                获取定制方案
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}