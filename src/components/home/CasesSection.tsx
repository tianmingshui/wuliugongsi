import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Building2, ShoppingCart, Factory, Truck } from 'lucide-react'

export default function CasesSection() {
  const cases = [
    {
      company: '某大型电商平台',
      industry: '电商零售',
      icon: ShoppingCart,
      challenge: '双11期间订单量激增，物流配送压力大',
      solution: '提供临时仓储+配送一体化解决方案，增加运力投入',
      result: '100万+订单准时配送，客户满意度99.5%',
      rating: 5
    },
    {
      company: '某制造业龙头企业',
      industry: '制造业',
      icon: Factory,
      challenge: '原材料和成品需要跨区域调拨，运输成本高',
      solution: '优化运输路线，整合多式联运资源，降低运输成本',
      result: '运输成本降低30%，准时率提升至98%',
      rating: 5
    },
    {
      company: '某连锁超市集团',
      industry: '零售连锁',
      icon: Building2,
      challenge: '全国200+门店需要统一配送，库存管理复杂',
      solution: '建立区域分拨中心，实施智能调度系统',
      result: '配送效率提升40%，库存周转率提高25%',
      rating: 4
    }
  ]

  const testimonials = [
    {
      name: '张经理',
      position: '物流总监 - 某电商平台',
      content: '速达物流在双11期间的表现非常出色，不仅处理了我们激增的订单量，还保持了很高的准时率。专业的团队和完善的服务体系让我们非常放心。',
      rating: 5
    },
    {
      name: '李总',
      position: '供应链总监 - 某制造企业',
      content: '与速达物流合作以来，我们的物流成本显著降低，运输效率大幅提升。他们提供的多式联运方案非常贴合我们的需求，是值得信赖的合作伙伴。',
      rating: 5
    },
    {
      name: '王经理',
      position: '运营总监 - 某连锁超市',
      content: '速达物流为我们量身定制的配送方案解决了门店配送的难题。智能调度系统让配送更加高效，大大提升了我们的运营效率。',
      rating: 4
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            众多企业的信赖之选，我们用专业的服务赢得客户认可
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <caseItem.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{caseItem.company}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {caseItem.industry}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">面临挑战</h4>
                    <p className="text-sm text-gray-600">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">解决方案</h4>
                    <p className="text-sm text-gray-600">{caseItem.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">项目成果</h4>
                    <p className="text-sm text-gray-600">{caseItem.result}</p>
                  </div>
                </div>

                <div className="flex items-center mt-4 pt-4 border-t">
                  <div className="flex mr-2">
                    {renderStars(caseItem.rating)}
                  </div>
                  <span className="text-sm text-gray-600">客户评分</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-center mb-8">客户评价</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">合作客户</div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-600">成功案例</div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">续约率</div>
          </div>
          <div className="bg-white rounded-lg p-6">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-gray-600">平均评分</div>
          </div>
        </div>
      </div>
    </section>
  )
}