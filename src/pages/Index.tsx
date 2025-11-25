import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: 100,
    floors: 1,
    foundation: 'slab',
    roofType: 'gable',
    finishing: 'basic'
  });

  const calculateCost = () => {
    const basePrice = 25000;
    let total = calculatorData.area * basePrice;
    
    if (calculatorData.floors === 2) total *= 1.3;
    if (calculatorData.foundation === 'pile') total *= 1.1;
    if (calculatorData.foundation === 'strip') total *= 1.15;
    if (calculatorData.roofType === 'hip') total *= 1.08;
    if (calculatorData.finishing === 'premium') total *= 1.4;
    if (calculatorData.finishing === 'standard') total *= 1.2;
    
    return Math.round(total);
  };

  const projects = [
    {
      id: 1,
      name: 'Проект "Скандинавия"',
      area: 120,
      floors: 1,
      price: '3 000 000',
      image: 'https://cdn.poehali.dev/projects/7460384d-cdab-4718-973f-056568a5ff03/files/8a59e697-abf0-4ed9-9f65-c8e39a39795d.jpg',
      features: ['3 спальни', 'Терраса', 'Панорамные окна']
    },
    {
      id: 2,
      name: 'Проект "Модерн"',
      area: 150,
      floors: 2,
      price: '4 500 000',
      image: 'https://cdn.poehali.dev/projects/7460384d-cdab-4718-973f-056568a5ff03/files/223ec3f0-79d0-4c75-9aaa-831f97ad092d.jpg',
      features: ['4 спальни', 'Балкон', 'Гараж']
    },
    {
      id: 3,
      name: 'Проект "Уют"',
      area: 90,
      floors: 1,
      price: '2 250 000',
      image: 'https://cdn.poehali.dev/projects/7460384d-cdab-4718-973f-056568a5ff03/files/2919d1c4-eb1d-4896-b8cf-e568499260c2.jpg',
      features: ['2 спальни', 'Крыльцо', 'Камин']
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алексей Иванов',
      text: 'Построили дом за 3 месяца! Качество отличное, всё сделано профессионально.',
      rating: 5,
      date: '2024-10'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      text: 'Очень довольны результатом. Теплый, уютный дом. Рекомендуем!',
      rating: 5,
      date: '2024-09'
    },
    {
      id: 3,
      name: 'Дмитрий Смирнов',
      text: 'Отличное соотношение цена-качество. Команда профессионалов!',
      rating: 5,
      date: '2024-08'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-accent">СИП-Строй</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <Button>Контакты</Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Строительство под ключ</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Дома из СИП-панелей<br />
                <span className="text-primary">за 3 месяца</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Энергоэффективные и надёжные дома по доступным ценам. Полный цикл строительства от проекта до сдачи.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7460384d-cdab-4718-973f-056568a5ff03/files/8a59e697-abf0-4ed9-9f65-c8e39a39795d.jpg"
                alt="Современный дом"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="Clock" className="mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold mb-2">90 дней</div>
              <div className="text-white/80">Срок строительства</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Award" className="mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold mb-2">15 лет</div>
              <div className="text-white/80">Гарантия качества</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Home" className="mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-white/80">Построенных домов</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="ThermometerSnowflake" className="mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold mb-2">-40%</div>
              <div className="text-white/80">Расходы на отопление</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Выберите готовый проект или создадим индивидуальный</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.area} м² • {project.floors} этаж</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <Badge key={i} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">от {project.price} ₽</div>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-muted-foreground">Рассчитайте примерную стоимость вашего дома</p>
            </div>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Площадь дома: {calculatorData.area} м²</Label>
                    <Slider 
                      value={[calculatorData.area]} 
                      onValueChange={(value) => setCalculatorData({...calculatorData, area: value[0]})}
                      min={50}
                      max={300}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>50 м²</span>
                      <span>300 м²</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Количество этажей</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant={calculatorData.floors === 1 ? "default" : "outline"}
                        onClick={() => setCalculatorData({...calculatorData, floors: 1})}
                        className="h-16"
                      >
                        1 этаж
                      </Button>
                      <Button 
                        variant={calculatorData.floors === 2 ? "default" : "outline"}
                        onClick={() => setCalculatorData({...calculatorData, floors: 2})}
                        className="h-16"
                      >
                        2 этажа
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Тип фундамента</Label>
                    <div className="space-y-2">
                      {[
                        { value: 'slab', label: 'Плитный' },
                        { value: 'pile', label: 'Свайно-винтовой' },
                        { value: 'strip', label: 'Ленточный' }
                      ].map(option => (
                        <Button
                          key={option.value}
                          variant={calculatorData.foundation === option.value ? "default" : "outline"}
                          onClick={() => setCalculatorData({...calculatorData, foundation: option.value})}
                          className="w-full justify-start h-12"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Тип кровли</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant={calculatorData.roofType === 'gable' ? "default" : "outline"}
                        onClick={() => setCalculatorData({...calculatorData, roofType: 'gable'})}
                        className="h-16"
                      >
                        Двускатная
                      </Button>
                      <Button 
                        variant={calculatorData.roofType === 'hip' ? "default" : "outline"}
                        onClick={() => setCalculatorData({...calculatorData, roofType: 'hip'})}
                        className="h-16"
                      >
                        Вальмовая
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg mb-4 block">Уровень отделки</Label>
                    <div className="space-y-2">
                      {[
                        { value: 'basic', label: 'Базовая', desc: 'Без отделки' },
                        { value: 'standard', label: 'Стандарт', desc: 'Чистовая отделка' },
                        { value: 'premium', label: 'Премиум', desc: 'Под ключ' }
                      ].map(option => (
                        <Button
                          key={option.value}
                          variant={calculatorData.finishing === option.value ? "default" : "outline"}
                          onClick={() => setCalculatorData({...calculatorData, finishing: option.value})}
                          className="w-full justify-start h-16 flex-col items-start"
                        >
                          <span className="font-semibold">{option.label}</span>
                          <span className="text-xs opacity-80">{option.desc}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-primary text-white p-6">
                    <div className="text-center">
                      <div className="text-sm opacity-90 mb-2">Примерная стоимость</div>
                      <div className="text-4xl font-bold mb-4">{calculateCost().toLocaleString('ru-RU')} ₽</div>
                      <Button variant="secondary" className="w-full" size="lg">
                        <Icon name="MessageCircle" className="mr-2" />
                        Получить точный расчёт
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио готовых домов</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={item} className="relative group overflow-hidden rounded-xl animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <img 
                  src={projects[index % 3].image}
                  alt={`Готовый дом ${item}`}
                  className="w-full h-72 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="font-semibold mb-1">Дом в Подмосковье</div>
                    <div className="text-sm opacity-90">120 м² • 2024</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Технология СИП-панелей</h2>
            <p className="text-xl opacity-90">Современное решение для быстрого и качественного строительства</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Zap', title: 'Быстрое строительство', desc: 'Сборка дома за 2-3 недели' },
              { icon: 'ThermometerSun', title: 'Энергоэффективность', desc: 'Экономия на отоплении до 40%' },
              { icon: 'Shield', title: 'Прочность', desc: 'Выдерживает высокие нагрузки' },
              { icon: 'Leaf', title: 'Экологичность', desc: 'Безопасные материалы' },
              { icon: 'Volume2', title: 'Шумоизоляция', desc: 'Отличная звукоизоляция' },
              { icon: 'Wallet', title: 'Доступность', desc: 'Оптимальная цена' }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Icon name={item.icon} size={40} className="mb-4" />
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-white/80">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании СИП-Строй</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Мы специализируемся на строительстве энергоэффективных домов из СИП-панелей с 2010 года. 
              За это время построили более 200 домов в Московской области и соседних регионах.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Опытная команда</h3>
                <p className="text-muted-foreground">Квалифицированные специалисты с опытом от 10 лет</p>
              </div>
              <div>
                <Icon name="FileCheck" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Документация</h3>
                <p className="text-muted-foreground">Полный пакет документов и гарантия</p>
              </div>
              <div>
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">Всегда на связи для консультаций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы построить дом мечты?</h2>
          <p className="text-xl mb-8 opacity-90">Получите бесплатную консультацию и расчёт стоимости</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Ваш телефон"
              className="bg-white text-black h-12 text-lg"
            />
            <Button size="lg" variant="secondary" className="h-12">
              <Icon name="Send" className="mr-2" />
              Отправить
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={28} />
                <span className="text-xl font-bold">СИП-Строй</span>
              </div>
              <p className="text-white/70">Строительство домов из СИП-панелей под ключ</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#projects" className="hover:text-white transition-colors">Проекты домов</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@sip-stroy.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Строителей, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 СИП-Строй. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
