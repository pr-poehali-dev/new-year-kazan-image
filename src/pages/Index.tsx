import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface DayProgram {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
}

const tourProgram: DayProgram[] = [
  {
    day: 1,
    title: 'День 1: Прибытие и погружение в атмосферу',
    description: 'Вылет из Омска, встреча в Казани и первое знакомство с городом',
    activities: [
      'Вылет из Омска (утренний рейс)',
      'Встреча в аэропорту Казани с табличкой',
      'Трансфер и размещение в отеле 4* в центре города',
      'Обзорная экскурсия: улица Баумана, площадь Тысячелетия',
      'Первые впечатления от праздничной иллюминации',
      'Ужин в атмосферном татарском ресторане с национальными блюдами'
    ],
    meals: 'Ужин'
  },
  {
    day: 2,
    title: 'День 2: Сердце Казани',
    description: 'Полное погружение в культуру и историю столицы Татарстана',
    activities: [
      'Завтрак в отеле',
      'Экскурсия в Казанский Кремль (объект ЮНЕСКО) - 2 часа',
      'Белокаменная мечеть Кул-Шариф - архитектурное чудо',
      'Благовещенский собор и башня Сююмбике',
      'Обед в панорамном ресторане с видом на Кремль',
      'Национальный музей Республики Татарстан',
      'Свободное время: шопинг на Кремлевской или новогодняя ярмарка',
      'Вечерняя прогулка по праздничной набережной'
    ],
    meals: 'Завтрак, Обед'
  },
  {
    day: 3,
    title: 'День 3: Остров Свияжск и возвращение домой',
    description: 'Финальный аккорд путешествия - древний остров-град',
    activities: [
      'Ранний завтрак',
      'Выезд на остров Свияжск (50 км от Казани)',
      'Экскурсия по Успенскому монастырю XVI века',
      'Прогулка по островным улочкам',
      'Обед с панорамным видом на слияние рек',
      'Возвращение в Казань',
      'Трансфер в аэропорт',
      'Вылет в Омск (вечерний рейс)'
    ],
    meals: 'Завтрак, Обед'
  }
];

const tourDetails = {
  duration: '3 дня / 2 ночи',
  dates: '19-21 декабря',
  departure: 'Вылет из Омска',
  groupSize: 'до 20 человек',
  basePrice: 18600,
  oldPrice: 24900,
  included: [
    '✈️ Авиабилеты Омск-Казань-Омск (включены в стоимость!)',
    '🏨 Проживание в отеле 4* в центре Казани (2 ночи)',
    '🍽️ Питание: 2 завтрака + 2 обеда + 1 ужин',
    '🎭 Все экскурсии с профессиональным гидом',
    '🚌 Трансферы аэропорт-отель-аэропорт',
    '🎫 Входные билеты в Кремль, музеи и монастырь',
    '📋 Медицинская страховка на время тура',
    '👥 Сопровождение группы 24/7'
  ],
  notIncluded: [
    'Доплата за одноместное размещение: +3500 ₽',
    'Дополнительные экскурсии (по желанию)',
    'Личные расходы и сувениры'
  ]
};

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    people: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/30 animate-snowfall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              fontSize: `${10 + Math.random() * 10}px`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="relative">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/a06f1f82-d6e0-4a24-8fc0-fea5c782be93/files/9bf5e6b4-8972-4565-bcf5-22576fb51790.jpg"
            alt="Новогодняя Казань"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-center gap-3 mb-4 animate-twinkle">
                <Icon name="Sparkles" size={32} className="text-secondary" />
                <Icon name="Plane" size={28} className="text-secondary" />
                <Icon name="Sparkles" size={24} className="text-secondary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Казань Предновогодняя
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Погрузитесь в волшебство предновогодней Казани! Ощутите дух праздника на заснеженных улицах древнего города, где восточная сказка встречается с русскими традициями.
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  {tourDetails.duration}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Icon name="Plane" size={18} className="mr-2" />
                  {tourDetails.departure}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Icon name="Users" size={18} className="mr-2" />
                  {tourDetails.groupSize}
                </Badge>
                <div className="relative inline-block">
                  <Badge variant="secondary" className="px-4 py-2 text-base relative">
                    <Icon name="Tag" size={18} className="mr-2" />
                    <span className="line-through opacity-60 mr-2">{tourDetails.oldPrice.toLocaleString()} ₽</span>
                    <span className="text-xl font-bold text-green-600">{tourDetails.basePrice.toLocaleString()} ₽</span>
                  </Badge>
                  <Badge className="absolute -top-3 -right-3 bg-red-500 text-white animate-pulse">
                    Спеццена!
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-12">
          <Card className="mb-12 overflow-hidden border-accent/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-secondary/10">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Info" size={32} className="text-accent" />
                О туре
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                    Включено в стоимость
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-green-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="XCircle" size={24} className="text-orange-600" />
                    Не включено в стоимость
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.notIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Icon name="X" size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Программа тура
            </h2>
            <div className="space-y-6">
              {tourProgram.map((day) => (
                <Card key={day.day} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{day.day}</span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{day.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{day.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="MapPin" size={18} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                      <div className="pt-4 border-t flex items-center gap-2 text-secondary font-semibold">
                        <Icon name="Utensils" size={20} />
                        {day.meals}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-accent/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-accent to-secondary text-white">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Send" size={32} />
                Забронировать тур
              </CardTitle>
              <CardDescription className="text-white/90 text-base">
                Оставьте заявку, и мы свяжемся с вами для подтверждения бронирования
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Ваше имя</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="people" className="text-base">Количество человек</Label>
                    <Input
                      id="people"
                      name="people"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg">Стоимость за человека:</span>
                    <span className="text-2xl font-bold text-accent">{tourDetails.basePrice.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-3xl text-secondary">
                      {(tourDetails.basePrice * parseInt(formData.people || '1')).toLocaleString()} ₽
                    </span>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Phone" size={28} className="text-accent" />
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-semibold">+7 (843) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">tour@kazan.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Режим работы</p>
                    <p className="font-semibold">Пн-Вс: 9:00-21:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}