import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightgray to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold text-navy">AVITO ADVERTISING</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#services" className="font-body text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#analytics" className="font-body text-gray-700 hover:text-primary transition-colors">Аналитика</a>
              <a href="#contact" className="font-body text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Современные решения для вашей рекламы
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-body">
                Отслеживайте результаты кампаний в реальном времени с нашими инструментами аналитики
              </p>
              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 text-lg font-body">
                  Начать сейчас
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg font-body">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5d2e296d-bd45-409b-851a-4660c1cfaa74.jpg" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-navy mb-4">Наши услуги</h3>
            <p className="text-xl text-gray font-body">Комплексные решения для эффективной рекламы</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading text-navy">Таргетированная реклама</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray font-body leading-relaxed">
                  Точное попадание в целевую аудиторию с максимальной конверсией
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading text-navy">Аналитика кампаний</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray font-body leading-relaxed">
                  Детальная статистика и отчеты по эффективности рекламных кампаний
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading text-navy">Оптимизация ROI</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray font-body leading-relaxed">
                  Максимизация возврата инвестиций через умную оптимизацию бюджета
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section id="analytics" className="py-20 bg-gradient-to-r from-gray-50 to-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-navy mb-4">Инструменты отслеживания</h3>
            <p className="text-xl text-gray font-body">Полный контроль над результатами ваших кампаний</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-heading text-navy flex items-center">
                  <Icon name="Activity" className="w-6 h-6 mr-3 text-primary" />
                  ROI по кампаниям
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-gray">Avito Объявления</span>
                      <span className="font-body font-semibold text-navy">342%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-gray">Продвижение услуг</span>
                      <span className="font-body font-semibold text-navy">198%</span>
                    </div>
                    <Progress value={65} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-gray">Avito Доставка</span>
                      <span className="font-body font-semibold text-navy">156%</span>
                    </div>
                    <Progress value={45} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-heading text-navy flex items-center">
                  <Icon name="Users" className="w-6 h-6 mr-3 text-primary" />
                  Аудитория
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">24.5K</div>
                    <div className="font-body text-gray">Охват</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">3.2%</div>
                    <div className="font-body text-gray">CTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">₽89</div>
                    <div className="font-body text-gray">CPC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">12.8%</div>
                    <div className="font-body text-gray">Конверсия</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-gray mb-1">Общие расходы</p>
                  <p className="text-2xl font-heading font-bold text-navy">₽487K</p>
                </div>
                <Icon name="DollarSign" className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-gray mb-1">Прибыль</p>
                  <p className="text-2xl font-heading font-bold text-navy">₽1.2M</p>
                </div>
                <Icon name="TrendingUp" className="w-8 h-8 text-green-500" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-gray mb-1">Активные кампании</p>
                  <p className="text-2xl font-heading font-bold text-navy">12</p>
                </div>
                <Icon name="Play" className="w-8 h-8 text-primary" />
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-gray mb-1">Средний ROI</p>
                  <p className="text-2xl font-heading font-bold text-navy">245%</p>
                </div>
                <Icon name="Target" className="w-8 h-8 text-green-500" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="BarChart3" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-white">AVITO ADVERTISING</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors font-body">Условия</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors font-body">Конфиденциальность</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors font-body">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 font-body">&copy; 2024 Avito Advertising. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;