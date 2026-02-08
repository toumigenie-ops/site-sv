import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback.tsx';
import { Button } from './ui/button';

const QuestionPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(135deg, #ffe4e6 0%, #fce7f3 100%)', minHeight: '100vh' }} className="flex flex-col items-center justify-center p-6">
      {/* Title Section */}
      <div className="text-center mb-20">
        <div className="mb-6">
          <Heart className="w-16 h-16 mx-auto" style={{ color: '#ef4444', fill: '#ef4444' }} />
        </div>
        <h1 style={{ color: '#dc2626', fontSize: '56px', fontWeight: '900', lineHeight: '1.2' }} className="mb-2">
          BB
        </h1>
        <h2 style={{ color: '#991b1b', fontSize: '48px', fontWeight: '900', lineHeight: '1.2' }}>
          VEUX TU ETRE<br />MA VALENTINE ?
        </h2>
      </div>

      {/* Two Buttons with Images */}
      <div className="flex gap-12 flex-col md:flex-row max-w-4xl w-full">
        {/* OUI Button */}
        <div className="flex-1 flex flex-col cursor-pointer">
          <div className="h-80 rounded-3xl overflow-hidden shadow-2xl mb-6">
            <ImageWithFallback
              src="components/assets/DSCN0693.jpeg"
              alt="Couple heureux"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <Button 
            onClick={() => navigate('/finale')}
            style={{ background: '#22c55e', fontSize: '32px', padding: '24px 32px' }}
            className="w-full font-black text-white rounded-2xl shadow-xl"
          >
            OUI ! ❤️
          </Button>
        </div>

        {/* NON Button */}
        <div className="flex-1 flex flex-col">
          <div style={{ filter: 'grayscale(80%)' }} className="h-80 rounded-3xl overflow-hidden shadow-2xl mb-6">
            <ImageWithFallback
              src="components/assets/IMG_5162.jpeg"
              alt="Personne seule"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <Button 
            disabled
            style={{ background: '#d1d5db', fontSize: '32px', padding: '24px 32px' }}
            className="w-full font-black text-gray-700 rounded-2xl shadow-xl cursor-not-allowed"
          >
            Non 😢
          </Button>
        </div>
      </div>
    </div>
  );
};
export default QuestionPage;
