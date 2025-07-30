import { ParallaxSection } from '@/components/ParallaxSection';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { TrustBadge } from '@/components/TrustBadge';
import { BookingForm } from '@/components/BookingForm';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { Phone, Mail, MapPin, Star, Heart, Shield, Users } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import carlitaAbout from '@/assets/carlita-about.jpg';
import weightLossBg from '@/assets/weight-loss-bg.jpg';
import aestheticTreatmentsBg from '@/assets/aesthetic-treatments-bg.jpg';
export default function MonetWellness() {
  return <div className="min-h-screen">
      {/* HERO SECTION */}
      <ParallaxSection backgroundImage={heroBackground} className="relative">
        <div className="container mx-auto px-6 text-center text-white">
          <ScrollAnimation className="max-w-4xl mx-auto">
            <h1 className="heading-primary text-white mb-4">
          </h1>
            <p className="tagline mb-8">Love Yourself First</p>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
              Transform Your Confidence with Expert Care
            </h2>
            <p className="body-large mb-12 text-white/80 max-w-3xl mx-auto">
              Experience the perfect blend of medical expertise and aesthetic artistry with Northeast Ohio's most trusted wellness practice. Led by Certified Nurse Practitioner Carlita Lockett, we specialize in making premium aesthetic treatments and weight loss solutions accessible to everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary">
                Start Your Self-Love Journey
              </button>
              <button className="btn-secondary">
                Call (330) 328-3805
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="flex items-center gap-2 text-white/90">
                <Star className="w-4 h-4 text-yellow-400" />
                18+ Years of Excellence
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Heart className="w-4 h-4 text-primary" />
                500+ Satisfied Clients
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Shield className="w-4 h-4 text-green-400" />
                CNP Certified
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Users className="w-4 h-4 text-blue-400" />
                Concierge Services Available
              </span>
            </div>
          </ScrollAnimation>
          
          {/* Floating Trust Badges */}
          <div className="absolute top-20 left-10 hidden lg:block">
            <TrustBadge text="18+ Years Experience" />
          </div>
          <div className="absolute top-32 right-10 hidden lg:block">
            <TrustBadge text="CNP Certified" className="animation-delay-1000" />
          </div>
          <div className="absolute bottom-20 left-20 hidden lg:block">
            <TrustBadge text="500+ Happy Clients" className="animation-delay-2000" />
          </div>
          <div className="absolute bottom-32 right-20 hidden lg:block">
            <TrustBadge text="Concierge Services" className="animation-delay-3000" />
          </div>
        </div>
      </ParallaxSection>

      {/* ABOUT CARLITA SECTION */}
      <ParallaxSection backgroundImage={carlitaAbout} height="auto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="wellness-card">
                <h2 className="heading-secondary text-center mb-4">
                  Meet Carlita Lockett, CNP
                </h2>
                <p className="tagline text-center mb-8">Your Partner in Self-Love</p>
                
                <div className="text-center mb-8">
                  <blockquote className="text-xl md:text-2xl italic text-primary font-medium">
                    "Love Yourself First - Everything Else Falls Into Place"
                  </blockquote>
                </div>
                
                <div className="space-y-6 body-text">
                  <p>Carlita Lockett didn't just choose aesthetics as a career; she chose it as a calling. As a Certified Nurse Practitioner with 18 years of excellence, Carlita understands that true beauty radiates from within - and sometimes we all need a little support to help that inner light shine brighter.</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-playfair text-xl font-bold mb-4 text-primary">What Sets Carlita Apart:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Genuine Care:</strong> Every consultation feels like talking to a trusted friend who happens to be a medical expert</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Honest Approach:</strong> Realistic expectations, transparent pricing, and treatments that enhance your natural beauty</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Safety First:</strong> Only FDA-approved products and techniques backed by years of clinical experience</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Ongoing Support:</strong> Your journey doesn't end after treatment - Carlita is with you every step of the way</span>
                        </li>
                      </ul>
                    </div>
                    
                    
                  </div>
                  
                  <div className="text-center pt-6 border-t border-border">
                    <blockquote className="text-lg italic text-muted-foreground">"When you love yourself first, you give others permission to love you too. </blockquote>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ParallaxSection>

      {/* WEIGHT LOSS SECTION */}
      <ParallaxSection backgroundImage={weightLossBg} height="auto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="wellness-card">
                <div className="text-center mb-12">
                  <h2 className="heading-secondary mb-4">Love Yourself First: Your Transformation Journey</h2>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                    Medically Supervised Weight Loss with Semaglutide
                  </h3>
                  <p className="body-large text-center max-w-3xl mx-auto">
                    Loving yourself first means investing in your health and happiness. Our comprehensive Semaglutide program isn't just about losing weight - it's about gaining confidence, energy, and a renewed relationship with your body.
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-6 text-primary">Why Choose Self-Love Over Quick Fixes:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Medical Supervision:</strong> CNP-guided program with regular health monitoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Sustainable Results:</strong> Clients typically achieve 15-20% body weight reduction safely</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Holistic Approach:</strong> Focus on lifestyle changes that support long-term success</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Personalized Care:</strong> Your plan is as unique as you are</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-6 text-primary">Your Self-Love Weight Loss Journey:</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-lg mb-2">Step 1: Compassionate Consultation</h4>
                        <p className="text-sm text-muted-foreground">We start with understanding your story, your goals, and your relationship with your body.</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold text-lg mb-2">Step 2: Personalized Protocol</h4>
                        <p className="text-sm text-muted-foreground">Your dosing plan is carefully crafted based on your individual needs.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-4">
                        <h4 className="font-semibold text-lg mb-2">Step 3: Professional Care</h4>
                        <p className="text-sm text-muted-foreground">Weekly injections administered with precision and care.</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold text-lg mb-2">Step 4: Ongoing Support</h4>
                        <p className="text-sm text-muted-foreground">Regular check-ins to celebrate progress and adjust your plan.</p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-semibold text-lg mb-2">Step 5: Lifestyle Integration</h4>
                        <p className="text-sm text-muted-foreground">Guidance on sustainable habits that support long-term success.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-playfair text-xl font-bold text-center mb-8 text-primary">
                    TRANSPARENT PRICING - BECAUSE YOU DESERVE HONESTY
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="pricing-item bg-secondary/20 rounded-lg p-4 text-center">
                      <h4 className="font-semibold">0.25mg</h4>
                      <p className="text-sm text-muted-foreground mb-2">Gentle Start</p>
                      <p className="text-2xl font-bold text-primary">$266<span className="text-sm">/month</span></p>
                    </div>
                    <div className="pricing-item bg-accent/30 rounded-lg p-4 text-center">
                      <h4 className="font-semibold">0.5mg</h4>
                      <p className="text-sm text-muted-foreground mb-2">Standard Strength</p>
                      <p className="text-2xl font-bold text-primary">$278<span className="text-sm">/month</span></p>
                    </div>
                    <div className="pricing-item bg-primary/10 rounded-lg p-4 text-center">
                      <h4 className="font-semibold">1.0mg</h4>
                      <p className="text-sm text-muted-foreground mb-2">Enhanced Results</p>
                      <p className="text-2xl font-bold text-primary">$284<span className="text-sm">/month</span></p>
                    </div>
                    <div className="pricing-item bg-secondary/30 rounded-lg p-4 text-center">
                      <h4 className="font-semibold">1.7mg</h4>
                      <p className="text-sm text-muted-foreground mb-2">Maximum Strength</p>
                      <p className="text-2xl font-bold text-primary">$296<span className="text-sm">/month</span></p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    All pricing includes professional administration, health monitoring, and ongoing support. 
                    <br />Payment plans available because self-love shouldn't wait.
                  </p>
                </div>
                
                <div className="text-center mt-8">
                  <button className="btn-primary">
                    Begin Your Transformation Journey
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ParallaxSection>

      {/* AESTHETIC TREATMENTS SECTION */}
      <ParallaxSection backgroundImage={aestheticTreatmentsBg} height="auto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="wellness-card">
                <div className="text-center mb-12">
                  <h2 className="heading-secondary mb-4">Injectable Artistry: Enhance the Beauty That's Already There</h2>
                  <p className="tagline mb-6">Love Yourself First - Then Let Us Enhance Your Natural Radiance</p>
                  <p className="body-large text-center max-w-3xl mx-auto">
                    True beauty enhancement celebrates what makes you uniquely you. Our aesthetic treatments are designed to refresh, restore, and reveal your natural beauty - never to change who you are, but to help you feel like the best version of yourself.
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold mb-6 text-primary">NEUROMODULATORS (WRINKLE RELAXERS)</h3>
                    <p className="text-lg mb-6 text-muted-foreground">Smooth Away Time, Not Your Character</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-lg mb-4">Premium Options with Transparent Pricing:</h4>
                      <div className="space-y-3">
                        <div className="pricing-item">
                          <span className="font-semibold">Botox</span>
                          <span className="text-primary font-bold">$14/unit (Most Popular)</span>
                        </div>
                        <div className="pricing-item">
                          <span className="font-semibold">Dysport</span>
                          <span className="text-primary font-bold">$4/unit</span>
                        </div>
                        <div className="pricing-item">
                          <span className="font-semibold">Xeomin</span>
                          <span className="text-primary font-bold">$9/unit</span>
                        </div>
                        <div className="pricing-item">
                          <span className="font-semibold">Jeuveau</span>
                          <span className="text-primary font-bold">$13/unit</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-lg mb-4">Treatment Areas & Your Investment:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="pricing-item">
                          <span>Forehead Lines: 10-30 units</span>
                          <span className="text-primary">$140-420 with Botox</span>
                        </div>
                        <div className="pricing-item">
                          <span>Crow's Feet: 5-15 units</span>
                          <span className="text-primary">$70-210 with Botox</span>
                        </div>
                        <div className="pricing-item">
                          <span>Frown Lines: 10-25 units</span>
                          <span className="text-primary">$140-350 with Botox</span>
                        </div>
                        <div className="pricing-item">
                          <span>Lip Flip: 4-8 units</span>
                          <span className="text-primary">$56-112 with Botox</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">*Exact units determined during your personalized consultation</p>
                    </div>
                    
                    <div className="bg-secondary/20 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-4">Specialty Enhancements (Each $98):</h4>
                      <p className="text-sm mb-4 text-muted-foreground">Perfect for adding those special touches that make you feel radiant:</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Brow Lift (for that refreshed look)</li>
                        <li>• Bunny Lines (smooth nose wrinkles)</li>
                        <li>• Chin Dimpling (smooth texture)</li>
                        <li>• Gummy Smile Correction (perfect your smile)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-2xl font-bold mb-6 text-primary">DERMAL FILLERS</h3>
                    <p className="text-lg mb-6 text-muted-foreground">Restore Your Natural Volume and Contours</p>
                    
                    <p className="body-text mb-8">
                      Add back what time has taken away while keeping your unique character intact. Our expertly administered dermal fillers create subtle, natural-looking enhancements that make you look refreshed and feel confident.
                    </p>
                    
                    <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center">
                      <h4 className="text-2xl font-bold text-primary mb-2">Starting at $598 per syringe</h4>
                      <p className="text-sm text-muted-foreground">Most treatments require 1-2 syringes for optimal, natural-looking results</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Popular Enhancement Areas:</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-semibold">Lips</h5>
                          <p className="text-sm text-muted-foreground">Add volume and definition while maintaining your natural lip shape</p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <h5 className="font-semibold">Cheeks</h5>
                          <p className="text-sm text-muted-foreground">Restore youthful fullness and enhance your bone structure</p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h5 className="font-semibold">Smile Lines</h5>
                          <p className="text-sm text-muted-foreground">Smooth nasolabial folds for a refreshed, happy appearance</p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-semibold">Jawline</h5>
                          <p className="text-sm text-muted-foreground">Define and sculpt for improved facial harmony</p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <h5 className="font-semibold">Chin</h5>
                          <p className="text-sm text-muted-foreground">Enhance projection and create better facial balance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <button className="btn-primary">
                    Schedule Your Beauty Consultation
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ParallaxSection>

      {/* TREATMENT EXPERIENCE SECTION */}
      <section className="py-20 bg-background-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-secondary mb-12">Your Treatment Experience: Comfort and Care First</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-playfair text-xl font-bold mb-6 text-primary">Our Consultation Process:</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                      <div>
                        <h4 className="font-semibold">Listen First</h4>
                        <p className="text-sm text-muted-foreground">Understanding your goals and concerns is our priority</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                      <div>
                        <h4 className="font-semibold">Facial Analysis</h4>
                        <p className="text-sm text-muted-foreground">Professional assessment of your unique features</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                      <div>
                        <h4 className="font-semibold">Treatment Planning</h4>
                        <p className="text-sm text-muted-foreground">Customized approach designed just for you</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">4</div>
                      <div>
                        <h4 className="font-semibold">Education</h4>
                        <p className="text-sm text-muted-foreground">Clear explanation of procedures, expectations, and aftercare</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">5</div>
                      <div>
                        <h4 className="font-semibold">Expert Treatment</h4>
                        <p className="text-sm text-muted-foreground">Precise injection technique with your comfort in mind</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mt-1">6</div>
                      <div>
                        <h4 className="font-semibold">Follow-Up Care</h4>
                        <p className="text-sm text-muted-foreground">Ongoing support to ensure your satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl font-bold mb-6 text-primary">What to Expect:</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Immediate, natural-looking results</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Minimal downtime - back to loving your life quickly</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Results lasting 12-18 months for fillers, 3-4 months for neuromodulators</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Professional aftercare and support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* WELLNESS SHOTS & CONCIERGE SECTION */}
      <section className="py-20 bg-gradient-wellness">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="wellness-card">
                  <h2 className="heading-secondary mb-6">Wellness Shots</h2>
                  <p className="tagline mb-6">Nourish Your Body, Love Yourself First</p>
                  <p className="body-text mb-8">
                    Boost your wellness routine with targeted nutritional support delivered through professional vitamin injections. Perfect for busy people who want to prioritize their health and energy levels.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Detailed wellness shot options and pricing available during your consultation.
                  </p>
                  <button className="btn-primary">
                    Explore Wellness Options
                  </button>
                </div>
                
                <div className="wellness-card">
                  <h2 className="heading-secondary mb-6">We Come to You</h2>
                  <p className="text-xl font-semibold text-primary mb-6">Concierge Services Across Northeast Ohio</p>
                  <p className="body-text mb-6">
                    Bringing professional treatments to your preferred location
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">SERVICE AREAS:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Akron</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Copley</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Fairlawn</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Barberton</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Green</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Tallmadge</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary">
                    Book Concierge Service
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-background-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">What Our Clients Say</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Real experiences from real people who have transformed their wellness journey with Monet Aesthetics.
              </p>
            </div>
            <TestimonialCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Ready to Love Yourself First?</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">Start Your Wellness Journey Today</h3>
              <p className="body-large max-w-3xl mx-auto mb-8">
                Your transformation starts with a conversation. During your consultation, we'll discuss your goals, assess your needs, and create a personalized treatment plan that fits your lifestyle and budget.
              </p>
              
              <div className="max-w-2xl mx-auto mb-12">
                <h4 className="font-playfair text-lg font-semibold mb-4">What to expect during your consultation:</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>A warm, judgment-free environment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Comprehensive discussion of your goals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional assessment and honest recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden costs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <BookingForm />
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-background-white">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-secondary text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Are the treatments safe?</h3>
                  <p className="body-text">Absolutely. All treatments are administered by Carlita Lockett, CNP, using only FDA-approved products and following strict safety protocols developed over 18+ years of clinical experience. Your safety is our top priority.</p>
                </div>
                
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">How do I know which treatment is right for me?</h3>
                  <p className="body-text">During your consultation, we'll have an honest conversation about your goals and assess what treatments would best enhance your natural beauty. We never pressure - we guide.</p>
                </div>
                
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Are payment plans available?</h3>
                  <p className="body-text">Yes! We believe everyone deserves to invest in themselves. We offer flexible payment options to make your self-love journey accessible and stress-free.</p>
                </div>
                
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">How long do results last?</h3>
                  <p className="body-text">Neuromodulator results typically last 3-4 months, while dermal fillers can last 12-18 months. Weight loss results with Semaglutide can be maintained long-term with healthy lifestyle habits.</p>
                </div>
                
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Will I look natural after treatment?</h3>
                  <p className="body-text">That's our specialty! We enhance your natural beauty rather than changing who you are. Our goal is for people to say "you look great" not "you look different."</p>
                </div>
                
                <div className="wellness-card">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Do you really come to my home or office?</h3>
                  <p className="body-text">Yes! We bring professional-grade equipment and maintain the same safety and quality standards whether we're treating you at home, your office, or another preferred location across Northeast Ohio.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer className="bg-foreground text-background-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-2">
                <h3 className="font-playfair text-2xl font-bold mb-4">MONET AESTHETICS & WELLNESS</h3>
                <p className="tagline text-primary mb-6">Love Yourself First</p>
                <p className="text-sm text-background-white/80 mb-6">
                  Professional • Accessible • Transformative
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-lg font-semibold">(330) 328-3805</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>monet.aesthetics.wellness@gmail.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">SERVICES</h4>
                <ul className="space-y-2 text-sm text-background-white/80">
                  <li>Semaglutide Weight Loss ($266-$296/month)</li>
                  <li>Botox ($14/unit)</li>
                  <li>Dermal Fillers (Starting at $598/syringe)</li>
                  <li>Wellness Shots</li>
                  <li>Concierge Services</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">SERVICE AREAS</h4>
                <p className="text-sm text-background-white/80 mb-4">
                  Concierge services throughout Northeast Ohio:
                </p>
                <ul className="space-y-1 text-sm text-background-white/80">
                  <li>• Akron</li>
                  <li>• Copley</li>
                  <li>• Fairlawn</li>
                  <li>• Barberton</li>
                  <li>• Green</li>
                  <li>• Tallmadge</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-background-white/60">
                  © 2025 Monet Aesthetics and Wellness. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-background-white/60">
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-primary transition-colors">Medical Disclaimers</a>
                  <a href="#" className="hover:text-primary transition-colors">Cancellation Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}