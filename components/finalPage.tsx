import { Heart, Calendar, Clock, MapPin } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback.tsx';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.tsx';

const FinalPage = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #fbcfe8 0%, #fecaca 100%)', minHeight: '100vh' }} className="flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Message */}
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-3">
            <Heart className="w-12 h-12" style={{ color: '#dc2626', fill: '#dc2626' }} />
            <span style={{ fontSize: '36px' }}>🎉</span>
            <Heart className="w-12 h-12" style={{ color: '#dc2626', fill: '#dc2626' }} />
          </div>
          <h1 style={{ color: '#991b1b', fontSize: '52px', fontWeight: '900' }}>
            Super ! 🎉
          </h1>
          <p style={{ color: '#7f1d1d', fontSize: '24px', fontWeight: '600' }}>
            Mets ta plus belle tenue !
          </p>
        </div>

        {/* Romantic Image */}
        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680079033073-860e3b9c2094?w=500&q=80"
            alt="Dîner romantique"
            width={500}
            height={300}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Rendez-vous Card */}
        <Card className="border-0" style={{ background: 'white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
          <CardHeader className="text-center pb-4">
            <CardTitle style={{ color: '#dc2626', fontSize: '32px' }}>Rendez-vous</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '16px' }} className="flex items-center gap-4">
                <Calendar className="w-8 h-8" style={{ color: '#dc2626', flexShrink: 0 }} />
                <div>
                  <p style={{ color: '#4b5563', fontWeight: '600' }}>Date</p>
                  <p style={{ color: '#dc2626', fontSize: '18px', fontWeight: '600' }}>Samedi 14 février</p>
                </div>
              </div>
              <div style={{ background: '#fbcfe8', borderRadius: '12px', padding: '16px' }} className="flex items-center gap-4">
                <Clock className="w-8 h-8" style={{ color: '#ec4899', flexShrink: 0 }} />
                <div>
                  <p style={{ color: '#4b5563', fontWeight: '600' }}>Heure</p>
                  <p style={{ color: '#ec4899', fontSize: '18px', fontWeight: '600' }}>20H30</p>
                </div>
              </div>
              <div style={{ background: '#fce7f3', borderRadius: '12px', padding: '16px' }} className="flex items-center gap-4">
                <MapPin className="w-8 h-8" style={{ color: '#f472b6', flexShrink: 0 }} />
                <div>
                  <p style={{ color: '#4b5563', fontWeight: '600' }}>Lieu</p>
                  <p style={{ color: '#f472b6', fontSize: '18px', fontWeight: '600' }}>L'OMBRIERE</p>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '2px solid #fecaca', paddingTop: '24px', marginTop: '24px' }}>
              <p style={{ color: '#991b1b', fontSize: '26px', fontWeight: '700', lineHeight: '1.6', letterSpacing: '0.5px', fontStyle: 'italic' }}>
                Je t'aime mon amour, l'année 2026 c'est la nôtre et j'ai hâte de un peu plus te le montrer samedi ❤️
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default FinalPage;
