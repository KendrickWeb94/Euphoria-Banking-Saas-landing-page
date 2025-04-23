import { Instagram, Linkedin, LucideFacebook, Twitter } from "lucide-react";
import { Logo } from "../ui/logo";
import { appStore, GooglePlay } from "../../constants";

export const Footer = () => {
  return (
    <footer className="cta-section w-full h-auto py-8 pt-28">
      <section className="container-wrapper w-full">
        <div className="grid-footer py-6 gap-24">
          <div className="space-y-5 md:mr-5 col-span-1">
            <Logo />
            <p className="text-white/70 text-sm font-medium">
              Empowering Your Projects, Enhancing Your Success, Every Step of
              the Way.
            </p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 bg-white/5 rounded-md text-white flex items-center justify-center">
                <LucideFacebook size={16} />
              </button>
              <button className="w-10 h-10 bg-white/5 rounded-md text-white flex items-center justify-center">
                <Linkedin size={16} />
              </button>
              <button className="w-10 h-10 bg-white/5 rounded-md text-white flex items-center justify-center">
                <Instagram size={16} />
              </button>
              <button className="w-10 h-10 bg-white/5 rounded-md text-white flex items-center justify-center">
                <Twitter size={16} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-semibold">Home</h1>
            <ul className="space-y-3 text-white/70">
              <li className="text-sm">Product Features</li>
              <li className="text-sm">Benefits</li>
              <li className="text-sm">How To Use</li>
              <li className="text-sm">Key Features</li>
              <li className="text-sm">Pricing</li>
              <li className="text-sm">Testimonials</li>
              <li className="text-sm">FAQ’s</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-semibold">App</h1>
            <ul className="space-y-3 text-white/70">
              <li className="text-sm">Mobile App</li>
              <li className="text-sm">Desktop App</li>
              <li className="text-sm">Web App</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-semibold">Business usage</h1>
            <ul className="space-y-3 text-white/70">
              <li className="text-sm">Ecommerce</li>
              <li className="text-sm">Physical Store</li>
              <li className="text-sm">Companies</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/5 border-[1.5] h-fit border-white/10 p-4">
            <div className="space-y-4">
              <h1 className="text-white">Download the app</h1>
              <div className="space-y-2">
                <img src={appStore} alt="" />
                <img src={GooglePlay} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white/10 h-[1px] w-full"></div>
        <div className="py-6 flex items-baseline flex-wrap gap-8 justify-between">
          <p className="text-white/70 text-sm">
            © 2024 Euphoria. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-white/70 text-sm">Privacy Policy</p>
            .
            <p className="text-white/70 text-sm">Terms of Services</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
