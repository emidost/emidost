'use client';

import { MessageCircle, Phone, Download, Store, Smartphone } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { CONTACT, DOWNLOADS, waLink } from '@/lib/content';

export default function FinalCTA() {
  return (
    <section className="ink section" id="start">
      <div className="container">
        <Reveal><span className="eyebrow">Get started</span></Reveal>
        <Reveal delay={0.05}>
          <h2>Start selling phones on EMI with a device lock</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="sub">
            Message us on WhatsApp and we&rsquo;ll set up your account, your retailer login and your
            first enrolment the same day.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="cta-row">
          <a className="btn whatsapp" href={waLink(CONTACT.whatsappCtaText)}>
            <MessageCircle size={17} /> WhatsApp {CONTACT.whatsappPretty}
          </a>
          <a className="btn ghost" href={`tel:${CONTACT.tel}`}>
            <Phone size={16} /> Call us
          </a>
          <a className="btn ghost" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </Reveal>

        <Reveal delay={0.1}><h3 className="dl-title">Download the apps</h3></Reveal>
        <Stagger className="dl-grid">
          <StaggerItem className="dl-card">
            <span className="dl-ico dl-ico-teal"><Store size={20} /></span>
            <span className="dl-tag">For your shop</span>
            <h3>Retailer app</h3>
            <p>Customer registration, EMI schedules, payments, step-by-step enrolment, and lock or unlock.</p>
            <a className="btn primary" href={DOWNLOADS.retailer}><Download size={16} /> Download APK</a>
          </StaggerItem>
          <StaggerItem className="dl-card">
            <span className="dl-ico dl-ico-amber"><Smartphone size={20} /></span>
            <span className="dl-tag">For financed phones</span>
            <h3>Customer app</h3>
            <p>Installed during enrolment and hidden after setup. Shows the EMI status and the payment screen when due.</p>
            <a className="btn primary" href={DOWNLOADS.customer}><Download size={16} /> Download APK</a>
          </StaggerItem>
        </Stagger>
        <Reveal delay={0.1}>
          <p className="fine-print fine-print-ink">
            Download links go live with the first public release. Until then, message us on WhatsApp
            and we&rsquo;ll send the apps and walk your first enrolment with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
