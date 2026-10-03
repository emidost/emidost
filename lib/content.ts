/**
 * emidost landing copy — single source of truth.
 * Every claim here is backed by shipped product behaviour (device-owner kiosk,
 * offline + SMS enforcement, SIM/reboot persistence, auto-unlock on payment).
 * No Owner-App / internal-admin concepts appear in any public string.
 */
import {
  ShieldCheck, WifiOff, MessageSquare, RotateCcw, Smartphone, Unlock, Lock,
  CreditCard, Cpu, Store, Users, Building2, ListChecks, BellRing, Phone,
  Siren, CheckCircle2, type LucideIcon,
} from 'lucide-react';

export const CONTACT = {
  whatsapp: '917003617074',
  whatsappPretty: '+91 70036 17074',
  email: 'financebuddy144@gmail.com',
  tel: '+917003617074',
  whatsappCtaText:
    'Hi emidost, I run a phone shop and want to start selling phones on EMI with device lock. Please set up my account.',
};

export const waLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const DOWNLOADS = {
  retailer: 'https://github.com/emidost/emidost/releases/latest/download/emidost-retailer.apk',
  customer: 'https://github.com/emidost/emidost/releases/latest/download/emidost-customer.apk',
};

/* Trust / capability strip — concise, verified capabilities only. */
export const CAPABILITIES: { label: string; icon: LucideIcon }[] = [
  { label: 'Device Owner mode', icon: ShieldCheck },
  { label: 'Offline-first lock', icon: WifiOff },
  { label: 'SMS lock & unlock', icon: MessageSquare },
  { label: 'Reboot-persistent', icon: RotateCcw },
  { label: 'SIM-removal lock', icon: Smartphone },
  { label: 'Auto-unlock on payment', icon: Unlock },
  { label: 'EMI payment tracking', icon: CreditCard },
  { label: 'Android 11+', icon: Cpu },
];

/* What the problem actually is for a retailer. */
export const PROBLEM_POINTS = [
  'Financed phones you can no longer see once they leave the counter',
  'EMI schedules and due dates tracked in a notebook or a chat',
  'A missed instalment, and nothing but a phone call for leverage',
  'Overdue devices with no safe, built-in way to pause them',
];

/* The headline product journey — drives the animated pipeline. */
export const JOURNEY: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Customer', body: 'A buyer picks a phone and agrees to an EMI plan at your counter.', icon: Users },
  { title: 'Device registration', body: 'Enrol the phone as a managed device — IMEI and plan linked to the customer.', icon: Smartphone },
  { title: 'EMI schedule', body: 'Months, amount and due day are recorded against the device.', icon: ListChecks },
  { title: 'Payment tracking', body: 'Mark each instalment. See exactly what is paid, due and overdue.', icon: CreditCard },
  { title: 'Device status', body: 'Every financed phone and its live state, from one device list.', icon: Store },
  { title: 'Lock / unlock', body: 'Overdue phones lock to the payment screen. Paid phones unlock on their own.', icon: Unlock },
];

/* Interactive device-lock states (normal → due → locked → paid → unlocked). */
export type DeviceState = 'active' | 'due' | 'locked' | 'paid';
export const DEVICE_STATES: {
  key: DeviceState;
  tab: string;
  title: string;
  caption: string;
}[] = [
  { key: 'active', tab: 'On track', title: 'EMI active', caption: 'A normal phone while instalments are on time.' },
  { key: 'due', tab: 'Payment due', title: 'Payment due', caption: 'A clear reminder shows the amount and the due date.' },
  { key: 'locked', tab: 'Overdue', title: 'Phone locked', caption: 'Past due, the phone locks to the payment screen. 112 stays dialable.' },
  { key: 'paid', tab: 'Paid', title: 'Payment received', caption: 'Record the payment and the phone unlocks on its own.' },
];

export const SECURITY: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Device Owner architecture', body: 'The app enrols as the phone’s device owner — the operating system’s own manager, not a removable overlay. The menu factory reset is blocked.', icon: ShieldCheck },
  { title: 'Reboot persistence', body: 'A restart does not clear the state. If a phone was locked, it comes back locked.', icon: RotateCcw },
  { title: 'SIM-removal protection', body: 'Pulling or swapping the SIM triggers a lock within seconds, so the agreement cannot be dodged offline.', icon: Smartphone },
  { title: 'Offline safeguards', body: 'Enforcement runs on the phone. Stay offline too long and it locks itself — no server call needed.', icon: WifiOff },
  { title: 'Authorized commands', body: 'Lock and unlock are authenticated actions tied to your account and the financed device. Command details are never exposed publicly.', icon: Lock },
  { title: 'A fair exit, always', body: 'Emergency 112 stays reachable on the locked screen, and a settled loan never locks again.', icon: CheckCircle2 },
];

export const HOW_IT_WORKS: { step: string; title: string; body: string }[] = [
  { step: '01', title: 'Register the financed device', body: 'Scan the QR on a fresh phone. The app installs and becomes the device manager.' },
  { step: '02', title: 'Configure the EMI schedule', body: 'Add the customer, IMEI, number of months, amount and due day in the retailer app.' },
  { step: '03', title: 'Monitor payment status', body: 'Your dashboard shows every device as paid, due or overdue in real time.' },
  { step: '04', title: 'Apply device controls', body: 'When an instalment goes overdue, lock the phone to the payment screen in a tap.' },
  { step: '05', title: 'Restore access on payment', body: 'Record the instalment and the phone unlocks itself within seconds.' },
];

export const USE_CASES: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Mobile retailers', body: 'Sell more smartphones on EMI while keeping every financed device secured until it is paid off.', icon: Store },
  { title: 'Device financing businesses', body: 'Manage a growing book of financed Android devices with live EMI and payment status.', icon: Building2 },
  { title: 'Multi-store retail', body: 'Watch devices, due dates and locked phones across several counters from one device list.', icon: Users },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is EMI phone lock software?',
    a: 'It is software a mobile retailer uses to sell phones on EMI and keep each financed device secured until the instalments are paid. emidost tracks the EMI schedule and can lock an overdue phone to a payment screen, then unlock it the moment the payment is recorded.',
  },
  {
    q: 'How does an EMI mobile lock work?',
    a: 'During the sale, the phone is enrolled as a managed device and linked to the customer’s EMI plan. While payments are on time the phone is completely normal. If an instalment goes overdue, the phone locks to a single payment screen until the instalment is recorded.',
  },
  {
    q: 'Can an EMI device lock work without internet?',
    a: 'Yes. The enforcement runs on the phone itself, so it does not depend on a live connection. If the phone stays offline too long it locks on its own, and lock or unlock commands can be delivered by SMS when there is no data.',
  },
  {
    q: 'Can a retailer lock a phone remotely?',
    a: 'Yes — for devices you have financed and enrolled, under your agreement with the customer. You trigger the lock from the retailer app, online or by SMS. emidost only manages devices you have registered, never arbitrary phones.',
  },
  {
    q: 'How does unlocking work after payment?',
    a: 'You record the instalment in the retailer app and the phone unlocks on its own within seconds. There is no computer and no cable involved. A fully settled loan is released and never locks again.',
  },
  {
    q: 'Does emidost work on Android?',
    a: 'Yes. emidost supports Android 11 and above and the major smartphone brands sold in India. An enrolment wizard carries the per-brand setup steps so counter staff never have to guess.',
  },
  {
    q: 'What happens if the customer removes the SIM?',
    a: 'Removing or swapping the SIM triggers a lock within seconds. This stops a financed phone from being taken offline to avoid the agreement.',
  },
  {
    q: 'Does the lock survive a reboot?',
    a: 'Yes. Restarting the phone does not clear its state. If the device was locked, it returns locked after the reboot.',
  },
  {
    q: 'Can a customer bypass the lock with a factory reset?',
    a: 'From the settings menu, no — device owner mode blocks it and the lock returns after a reboot. One limit, stated plainly: a recovery-mode wipe using a computer can reset the phone, after which factory reset protection asks for the enrolled account. No phone software can block that entirely, and we do not claim otherwise.',
  },
  {
    q: 'Is emidost built for mobile retailers?',
    a: 'Yes. emidost is made for mobile shops and device financing businesses that sell smartphones on EMI. The whole workflow — enrolment, EMI tracking, lock and unlock — is designed for the counter.',
  },
  {
    q: 'How does SMS-based device control work?',
    a: 'When a financed phone has no data connection, authorized lock and unlock instructions can reach it over SMS instead. The command itself is authenticated and tied to your account and the specific device.',
  },
  {
    q: 'Can retailers manage multiple financed devices?',
    a: 'Yes. The retailer app and dashboard list every financed device with its customer, EMI progress and live status, so a shop can manage many phones at once and spot overdue accounts at a glance.',
  },
];

export const BRANDS = [
  'Samsung', 'Xiaomi', 'Redmi', 'POCO', 'vivo', 'iQOO', 'OPPO', 'OnePlus',
  'realme', 'HONOR', 'Google Pixel', 'Motorola', 'Nothing', 'Lava', 'Infinix', 'itel',
];
