import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  price: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Новогодний концерт в Кремле',
    date: '31 декабря',
    time: '20:00',
    location: 'Казанский Кремль',
    category: 'Концерт',
    description: 'Праздничный концерт с участием звезд российской эстрады',
    price: 'От 2000 ₽'
  },
  {
    id: 2,
    title: 'Ледовое шоу "Снежная королева"',
    date: '1-7 января',
    time: '18:00',
    location: 'Татнефть Арена',
    category: 'Шоу',
    description: 'Захватывающее ледовое представление для всей семьи',
    price: 'От 1500 ₽'
  },
  {
    id: 3,
    title: 'Новогодняя ярмарка',
    date: '20 декабря - 8 января',
    time: '10:00 - 22:00',
    location: 'Площадь Тысячелетия',
    category: 'Ярмарка',
    description: 'Традиционная рождественская ярмарка с угощениями и подарками',
    price: 'Бесплатно'
  },
  {
    id: 4,
    title: 'Новогодний бал в Дворце',
    date: '30 декабря',
    time: '19:00',
    location: 'Дворец спорта',
    category: 'Бал',
    description: 'Торжественный новогодний бал с живой музыкой',
    price: 'От 3000 ₽'
  },
  {
    id: 5,
    title: 'Фейерверк на набережной',
    date: '31 декабря',
    time: '00:00',
    location: 'Кремлевская набережная',
    category: 'Салют',
    description: 'Грандиозное пиротехническое шоу встречи Нового года',
    price: 'Бесплатно'
  },
  {
    id: 6,
    title: 'Рождественская месса',
    date: '7 января',
    time: '10:00',
    location: 'Храм Всех Святых',
    category: 'Богослужение',
    description: 'Праздничная рождественская служба',
    price: 'Бесплатно'
  }
];

const locations = [
  { name: 'Казанский Кремль', address: 'ул. Шейнкмана, Кремль' },
  { name: 'Татнефть Арена', address: 'ул. Спортивная, 1' },
  { name: 'Площадь Тысячелетия', address: 'Площадь Тысячелетия' },
  { name: 'Кремлевская набережная', address: 'Кремлевская набережная' }
];

export default function Index() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('events');

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const favoriteEvents = events.filter(event => favorites.includes(event.id));

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
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/a06f1f82-d6e0-4a24-8fc0-fea5c782be93/files/9bf5e6b4-8972-4565-bcf5-22576fb51790.jpg"
            alt="Новогодняя Казань"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-4 animate-twinkle">
                <Icon name="Sparkles" size={32} className="text-secondary" />
                <Icon name="Sparkles" size={24} className="text-secondary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Новый Год в Казани
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Афиша праздничных мероприятий и событий
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Icon name="Calendar" size={18} />
                События
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Icon name="Heart" size={18} />
                Избранное
                {favorites.length > 0 && (
                  <Badge variant="secondary" className="ml-1">{favorites.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="places" className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                Места
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                Контакты
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                    <CardHeader className="relative">
                      <div className="flex justify-between items-start">
                        <Badge className="mb-2">{event.category}</Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(event.id)}
                          className="group-hover:scale-110 transition-transform"
                        >
                          <Icon
                            name="Heart"
                            size={20}
                            className={favorites.includes(event.id) ? 'fill-red-500 text-red-500' : ''}
                          />
                        </Button>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Icon name="Calendar" size={16} />
                        {event.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="MapPin" size={16} />
                          {event.location}
                        </div>
                        <p className="text-muted-foreground mt-3">{event.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="font-semibold text-secondary">{event.price}</span>
                          <Button size="sm" className="gap-2">
                            Подробнее
                            <Icon name="ArrowRight" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="animate-fade-in">
              {favoriteEvents.length === 0 ? (
                <Card className="p-12 text-center">
                  <Icon name="Heart" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Избранное пусто</h3>
                  <p className="text-muted-foreground">
                    Добавьте интересные события, нажав на ❤️
                  </p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge className="mb-2">{event.category}</Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(event.id)}
                          >
                            <Icon name="Heart" size={20} className="fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Icon name="Calendar" size={16} />
                          {event.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="Clock" size={16} />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="MapPin" size={16} />
                            {event.location}
                          </div>
                          <p className="text-muted-foreground mt-3">{event.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <span className="font-semibold text-secondary">{event.price}</span>
                            <Button size="sm" className="gap-2">
                              Подробнее
                              <Icon name="ArrowRight" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="places" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((location, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MapPin" size={24} className="text-accent" />
                        {location.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{location.address}</p>
                      <Button className="w-full gap-2">
                        <Icon name="Navigation" size={18} />
                        Как добраться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="animate-fade-in">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Контактная информация</CardTitle>
                  <CardDescription>Свяжитесь с нами по любым вопросам</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (843) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@kazan-events.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Казань, ул. Баумана, 58</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Часы работы</h4>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
