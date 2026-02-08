import { useNavigate } from 'react-router-dom';
import { ChefHat, AlertTriangle } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback.tsx';
import { Card, CardContent } from './ui/card.tsx';
import { Button } from './ui/button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fecaca 100%)', minHeight: '100vh' }} className="p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8 justify-center pt-6">
          <ChefHat className="w-12 h-12" style={{ color: '#ea580c' }} />
          <h1 style={{ color: '#ea580c', fontSize: '48px', fontWeight: '900' }}>Mes Recettes Préférées</h1>
        </div>

        {/* Maintenance Banner */}
        <div style={{ background: '#fef08a', borderLeft: '8px solid #eab308' }} className="p-6 mb-10 rounded-lg flex items-start gap-4">
          <AlertTriangle className="w-6 h-6" style={{ color: '#b45309', flexShrink: 0, marginTop: '4px' }} />
          <div>
            <h3 style={{ color: '#92400e', fontWeight: 'bold' }}>Site en maintenance</h3>
            <p style={{ color: '#a16207' }}>
              Nous effectuons actuellement des mises à jour. Certaines recettes peuvent être temporairement indisponibles.
            </p>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Available Recipe */}
          <Card className="overflow-hidden shadow-xl rounded-2xl border-0" style={{ background: 'white' }} onClick={() => navigate('/ready')}>
            <div style={{ height: '256px', overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1535381987-2075e3077deb?w=500&q=80"
                alt="Burger Pepe Chicken"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 style={{ color: '#1f2937', fontWeight: 'bold', fontSize: '20px' }} className="mb-3">Burger Pepe Chicken</h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }} className="mb-5">
                Le burger signature de Pepe Chicken - croustillant, savoureux et irrésistible !
              </p>
              <Button style={{ background: '#ea580c' }} className="w-full text-white font-bold py-3">
                Voir la recette →
              </Button>
            </CardContent>
          </Card>

          {/* Unavailable Recipes */}
          {['Tarte aux pommes', 'Pâtes carbonara', 'Salade César', 'Pizza margherita', 'Tiramisu'].map((name) => (
            <Card key={name} className="overflow-hidden shadow-lg rounded-2xl border-0" style={{ background: '#f3f4f6', opacity: 0.6 }}>
              <div style={{ height: '256px', background: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle className="w-16 h-16" style={{ color: '#9ca3af' }} />
              </div>
              <CardContent className="p-6">
                <h3 style={{ color: '#9ca3af', fontWeight: 'bold', fontSize: '20px' }} className="mb-3">{name}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px' }} className="mb-5">
                  Recette temporairement indisponible
                </p>
                <Button disabled style={{ background: '#d1d5db' }} className="w-full text-gray-600 font-bold py-3">
                  Indisponible
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;