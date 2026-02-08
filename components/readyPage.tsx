import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const ReadyPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(135deg, #fecaca 0%, #fbcfe8 100%)', minHeight: '100vh' }} className="flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Sparkles className="w-20 h-20" style={{ color: '#dc2626' }} />
          </div>
          <h1 style={{ color: '#991b1b', fontSize: '42px', fontWeight: '900' }}>
            Êtes-vous prêt ?
          </h1>
          <p style={{ color: '#7f1d1d', fontSize: '18px' }}>
            Cette recette est un peu spéciale...
          </p>
        </div>

        <Button 
          onClick={() => navigate('/question')}
          style={{ background: '#dc2626', fontSize: '18px', padding: '16px 24px' }}
          className="w-full text-white font-bold rounded-xl shadow-lg"
        >
          Lancer la recette maintenant
        </Button>
      </div>
    </div>
  );
};
export default ReadyPage;
