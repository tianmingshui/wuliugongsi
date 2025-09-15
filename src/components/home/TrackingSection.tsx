'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react'

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!trackingNumber.trim()) return
    setIsSearching(true)
    // 模拟搜索过程
    setTimeout(() => setIsSearching(false), 1500)
  }

  const trackingData = {
    status: 'in_transit',
    trackingNumber: 'SD2024031500123',
    origin: '北京市',
    destination: '上海市',
    estimatedDelivery: '2024-03-18',
    progress: [
      {
        time: '2024-03-15 10:30',
        location: '北京市',
        status: '已揽收',
        icon: Package,
        completed: true
      },
      {
        time: '2024-03-15 14:20',
        location: '北京市分拨中心',
        status: '已发出',
        icon: Truck,
        completed: true
      },
      {
        time: '2024-03-16 09:15',
        location: '济南市',
        status: '运输中',
        icon: Truck,
        completed: true
      },
      {
        time: '2024-03-17 08:00',
        location: '南京市',
        status: '运输中',
        icon: Truck,
        completed: false
      },
      {
        time: '预计 2024-03-18',
        location: '上海市',
        status: '预计送达',
        icon: CheckCircle,
        completed: false
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-500'
      case 'in_transit': return 'bg-blue-500'
      case 'pending': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return '已送达'
      case 'in_transit': return '运输中'
      case 'pending': return '待处理'
      default: return '未知状态'
    }
  }

  return (
    <section id="tracking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            物流追踪
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            实时追踪您的货物状态，让物流过程更加透明
          </p>
        </div>

        {/* Tracking Search */}
        <Card className="max-w-2xl mx-auto mb-12">
          <CardHeader>
            <CardTitle className="text-center">货物追踪查询</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="请输入运单号"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? '查询中...' : '查询'}
                <Search className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              示例运单号：SD2024031500123
            </p>
          </CardContent>
        </Card>

        {/* Tracking Result */}
        {trackingNumber && !isSearching && (
          <div className="max-w-4xl mx-auto">
            {/* Tracking Summary */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">运单号</div>
                    <div className="font-semibold">{trackingData.trackingNumber}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">状态</div>
                    <Badge className={`${getStatusColor(trackingData.status)} text-white`}>
                      {getStatusText(trackingData.status)}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">路线</div>
                    <div className="font-semibold text-sm">
                      {trackingData.origin} → {trackingData.destination}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">预计送达</div>
                    <div className="font-semibold">{trackingData.estimatedDelivery}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>物流轨迹</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.progress.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-primary text-white' : 'bg-gray-200 text-gray-400'
                      }`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                            {step.status}
                          </h4>
                          <span className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.time}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {step.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tracking Features */}
        {!trackingNumber && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">实时查询</h3>
                <p className="text-sm text-gray-600">
                  24小时实时查询货物状态，随时随地掌握物流动态
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">全程追踪</h3>
                <p className="text-sm text-gray-600">
                  从揽收到送达，全程轨迹记录，物流过程透明化
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">准时预警</h3>
                <p className="text-sm text-gray-600">
                  智能预警系统，提前通知异常情况，确保货物准时送达
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}