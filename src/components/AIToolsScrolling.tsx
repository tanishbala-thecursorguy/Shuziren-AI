import image_c5a79cf8787d5dbb9fee2a0b488ed996d5c1cfb9 from 'figma:asset/c5a79cf8787d5dbb9fee2a0b488ed996d5c1cfb9.png';
import image_9a9a4e7425a03caccce53329dff353fa040d4603 from 'figma:asset/9a9a4e7425a03caccce53329dff353fa040d4603.png';
import image_8363706f4860d77c7e8f2bb86d0c42050b2b3ce7 from 'figma:asset/8363706f4860d77c7e8f2bb86d0c42050b2b3ce7.png';
import image_d269b8a468d5dfdac4a50ff199957b401bea74ca from 'figma:asset/d269b8a468d5dfdac4a50ff199957b401bea74ca.png';
import image_d8eaabe978927a51bf3db174555cb6564f133dba from 'figma:asset/d8eaabe978927a51bf3db174555cb6564f133dba.png';
import image_6a371996650e4104b588adff2a353f2b24b5ecfe from 'figma:asset/6a371996650e4104b588adff2a353f2b24b5ecfe.png';
import image_1ff8e7b4b1a8df90433334a828a99140a7d70671 from 'figma:asset/1ff8e7b4b1a8df90433334a828a99140a7d70671.png';
import image_6b693d40a2dd747816cae19565f2006885031cd4 from 'figma:asset/6b693d40a2dd747816cae19565f2006885031cd4.png';
import image_73d5e63b3d413e468ae30a5bb0f3738b877cd7a9 from 'figma:asset/73d5e63b3d413e468ae30a5bb0f3738b877cd7a9.png';
import image_2a555b4307c6291ab11a1b8e011084aea1ab8890 from 'figma:asset/2a555b4307c6291ab11a1b8e011084aea1ab8890.png';
import image_1dec79a2946e68100d7375068fd8aa22d2f2a84b from 'figma:asset/1dec79a2946e68100d7375068fd8aa22d2f2a84b.png';
import image_6e29aad16674ce7aeaa72e787a64dd58f918ca96 from 'figma:asset/6e29aad16674ce7aeaa72e787a64dd58f918ca96.png';
import image_faa8e2a8395d993390d175323c33745bb986f885 from 'figma:asset/faa8e2a8395d993390d175323c33745bb986f885.png';
import image_5cea3cad0955a32b7353a0ed1c844c29836f4db0 from 'figma:asset/5cea3cad0955a32b7353a0ed1c844c29836f4db0.png';
import image_7dacddcdc2bf0c36db6f229cec30e8c9225daae6 from 'figma:asset/7dacddcdc2bf0c36db6f229cec30e8c9225daae6.png';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const aiCompanies = [
  {
    name: "OpenAI",
    logoUrl: image_d8eaabe978927a51bf3db174555cb6564f133dba
  },
  {
    name: "Google",
    logoUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBBSSUyMGxvZ298ZW58MXx8fHwxNzU5MjE5ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Microsoft",
    logoUrl: image_7dacddcdc2bf0c36db6f229cec30e8c9225daae6
  },
  {
    name: "Meta",
    logoUrl: image_5cea3cad0955a32b7353a0ed1c844c29836f4db0
  },
  {
    name: "Anthropic",
    logoUrl: image_faa8e2a8395d993390d175323c33745bb986f885
  },
  {
    name: "Hugging Face",
    logoUrl: image_6e29aad16674ce7aeaa72e787a64dd58f918ca96
  },
  {
    name: "NVIDIA",
    logoUrl: image_1dec79a2946e68100d7375068fd8aa22d2f2a84b
  },
  {
    name: "Stability AI",
    logoUrl: image_2a555b4307c6291ab11a1b8e011084aea1ab8890
  },
  {
    name: "Midjourney",
    logoUrl: image_73d5e63b3d413e468ae30a5bb0f3738b877cd7a9
  },
  {
    name: "Runway",
    logoUrl: image_6b693d40a2dd747816cae19565f2006885031cd4
  },
  {
    name: "ElevenLabs",
    logoUrl: image_1ff8e7b4b1a8df90433334a828a99140a7d70671
  },
  {
    name: "Perplexity",
    logoUrl: image_6a371996650e4104b588adff2a353f2b24b5ecfe
  },
  {
    name: "Tesla",
    logoUrl: image_8363706f4860d77c7e8f2bb86d0c42050b2b3ce7
  },
  {
    name: "Salesforce",
    logoUrl: image_d269b8a468d5dfdac4a50ff199957b401bea74ca
  },
  {
    name: "IBM",
    logoUrl: image_9a9a4e7425a03caccce53329dff353fa040d4603
  },
  {
    name: "Adobe",
    logoUrl: image_c5a79cf8787d5dbb9fee2a0b488ed996d5c1cfb9
  },
  {
    name: "Amazon AWS",
    logoUrl: "https://images.unsplash.com/photo-1669865015890-4dbd855de0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBV1MlMjBBbWF6b24lMjBsb2dvfGVufDF8fHx8MTc1OTIyMTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "GitHub",
    logoUrl: "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaXRIdWIlMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzU5MjIxMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Notion",
    logoUrl: "https://images.unsplash.com/photo-1628621532148-ff6d157ca609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOb3Rpb24lMjBsb2dvJTIwYnJhbmR8ZW58MXx8fHwxNzU5MjIxMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Figma",
    logoUrl: "https://images.unsplash.com/photo-1533129747330-480cdf535024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWdtYSUyMGxvZ28lMjBicmFuZHxlbnwxfHx8fDE3NTkyMjEwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function AIToolsScrolling() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-white text-center text-[24px]">AI-Tools & Integrations</h2>
      </div>
      
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex gap-8"
          animate={!isPaused ? {
            x: [0, -1600],
          } : {}}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          <div className="flex gap-8 shrink-0">
            {/* Company Logos */}
            {aiCompanies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-zinc-900/30 border border-gray-800/50 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-gray-700 transition-all duration-300 min-w-[140px] min-h-[140px] bg-[rgba(0,0,0,1)]"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-white/10 p-2 flex items-center justify-center bg-[rgba(0,0,0,1)]">
                  <ImageWithFallback
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain filter brightness-110"
                  />
                </div>
                <span className="text-white text-sm font-medium text-center">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex gap-8 shrink-0">
            {aiCompanies.map((company, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col items-center justify-center bg-zinc-900/30 border border-gray-800/50 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-gray-700 transition-all duration-300 min-w-[140px] min-h-[140px]"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 bg-white/10 p-2 flex items-center justify-center">
                  <ImageWithFallback
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain filter brightness-110"
                  />
                </div>
                <span className="text-white text-sm font-medium text-center">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}