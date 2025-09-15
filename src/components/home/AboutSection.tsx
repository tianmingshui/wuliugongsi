import { Card, CardContent } from '@/components/ui/card'
import { Award, Users, TrendingUp, Shield } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: '专业认证',
      description: '拥有国家一级物流企业资质，ISO9001质量管理体系认证'
    },
    {
      icon: Users,
      title: '专业团队',
      description: '500+专业物流人员，10年以上行业经验丰富'
    },
    {
      icon: TrendingUp,
      title: '持续发展',
      description: '年增长率保持在30%以上，不断扩大服务网络'
    },
    {
      icon: Shield,
      title: '安全保障',
      description: '全程货物保险，专业风险管控体系'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            关于速达物流
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            成立于2014年，速达物流已发展成为国内领先的综合性物流服务提供商，
            致力于为客户提供高效、安全、可靠的物流解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">我们的使命</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              速达物流秉承"客户至上，服务第一"的经营理念，通过先进的物流技术和专业的服务团队，
              为客户提供从仓储、运输到配送的一体化物流服务。我们不断创新，追求卓越，
              努力成为客户最信赖的物流合作伙伴。
            </p>
            <p className="text-gray-600 leading-relaxed">
              经过多年的发展，公司已建立起覆盖全国的物流网络，拥有现代化的仓储设施和专业的运输车队，
              能够满足不同客户的个性化物流需求。无论是大宗货物运输还是小件快递配送，
              我们都能提供专业、高效的解决方案。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">合作企业</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50万+</div>
              <div className="text-gray-600">年运输量(吨)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}