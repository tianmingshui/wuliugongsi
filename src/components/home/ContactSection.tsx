'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Users,
  Building2,
  Package
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert('感谢您的咨询，我们会尽快与您联系！')
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: '电话咨询',
      content: '400-888-8888',
      subcontent: '周一至周日 8:00-22:00'
    },
    {
      icon: Mail,
      title: '邮箱联系',
      content: 'service@suda-logistics.com',
      subcontent: '24小时内回复'
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市朝阳区建国路88号',
      subcontent: 'SOHO现代城A座2801'
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周日 8:00-22:00',
      subcontent: '节假日不休'
    }
  ]

  const serviceOptions = [
    { value: '', label: '请选择服务类型' },
    { value: 'road', label: '公路运输' },
    { value: 'air', label: '航空运输' },
    { value: 'sea', label: '海运服务' },
    { value: 'railway', label: '铁路运输' },
    { value: 'warehouse', label: '仓储服务' },
    { value: 'express', label: '快递服务' },
    { value: 'custom', label: '定制方案' }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业团队随时为您提供物流咨询和服务支持
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="h-5 w-5 mr-2" />
                在线咨询
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">姓名 *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">公司名称</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="请输入公司名称"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">联系电话 *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入联系电话"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">邮箱地址</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="请输入邮箱地址"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">服务类型</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">咨询内容</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="请详细描述您的需求，我们会为您提供专业的物流解决方案..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  提交咨询
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <info.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.subcontent}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">快速响应承诺</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">电话咨询</div>
                      <div className="text-sm text-gray-600">30秒内接通</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">邮件咨询</div>
                      <div className="text-sm text-gray-600">24小时内回复</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">专属客服</div>
                      <div className="text-sm text-gray-600">一对一专业服务</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">服务优势</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">全国500+服务网点</span>
                  </div>
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">年运输量50万吨+</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">500+专业物流团队</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="text-sm">24小时全天候服务</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}