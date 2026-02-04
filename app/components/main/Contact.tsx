'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import contactImage from '@/app/image/contact_image.jpg';

type ModalStatus = 'success' | 'error' | null;

export default function Contact() {
  const [sendData, setSendData] = useState({
    name: '',
    email: '',
    message: '',
    title: '',
  });
  const [modal, setModal] = useState<ModalStatus>(null);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSendData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const sendVerificationEmail = () => {
    const templateParams = {
      ...sendData,
      time: new Date().toLocaleString(),
    };

    setSending(true);
    emailjs
      .send(
        'service_n115y76',
        'template_phln552',
        templateParams,
        '3_Gx2m4MoPPlXHOFc',
      )
      .then(() => {
        setModal('success');
        setSendData({ name: '', email: '', message: '', title: '' });
      })
      .catch(() => {
        setModal('error');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative border-t border-zinc-200 bg-white px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50">
        <Image
          src={contactImage}
          alt="お問い合わせ - HSBRIGDEカスタマーサポート"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-xl">
        <h2 className="mb-4 text-center text-2xl font-semibold text-black md:text-3xl">
          CONTACT US
        </h2>
        <p className="mb-10 text-center text-zinc-600">
          お気軽にお問合せください
        </p>
        <div className="mb-10 space-y-2 text-center text-sm text-zinc-600">
          <p>総合窓口 : info@hsbridgeinc.com</p>
          <p>採用窓口 : recruit@hsbridgeinc.com</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-zinc-600">
              NAME <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={sendData.name}
              onChange={(e) => handleChange(e)}
              className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              placeholder="お名前"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-600">
              E-MAIL <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={sendData.email}
              onChange={(e) => handleChange(e)}
              className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              placeholder="メールアドレス"
            />
          </div>
          {/* <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-zinc-600">
              PHONE
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full rounded border border-zinc-300 bg-zinc-50 px-4 py-3 text-black placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              placeholder="電話番号"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-600">
              お問い合わせ内容 <span className="text-red-400">*</span>
            </label>
            <select
              className="w-full rounded border border-zinc-300 bg-zinc-50 px-4 py-3 text-black focus:border-amber-500 focus:outline-none"
              defaultValue=""
            >
              <option value="">ご用件をお選びください。</option>
              <option value="general">総合窓口</option>
              <option value="recruit">採用</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-600">
              お問い合わせ種類 <span className="text-red-400">*</span>
            </label>
            <select
              className="w-full rounded border border-zinc-300 bg-zinc-50 px-4 py-3 text-black focus:border-amber-500 focus:outline-none"
              defaultValue=""
            >
              <option value="">種類をお選びください。</option>
              <option value="ses">SES・人材</option>
              <option value="dooray">Dooray!</option>
              <option value="aws">AWS/GCP</option>
              <option value="other">その他</option>
            </select>
          </div> */}
          <div>
            <label htmlFor="title" className="mb-2 block text-sm text-zinc-600">
              TITLE <span className="text-red-400">*</span>
            </label>
            <input
              id="title"
              type="text"
              required
              value={sendData.title}
              onChange={(e) => handleChange(e)}
              className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              placeholder="メールアドレス"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-zinc-600"
            >
              MESSAGE <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={sendData.message}
              className="w-full rounded border border-zinc-300 bg-white px-4 py-3 text-black placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              onChange={(e) => handleChange(e)}
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>
          <button
            type="submit"
            onClick={() => sendVerificationEmail()}
            disabled={sending}
            className="w-full rounded-full bg-amber-500 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? '送信中...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* 결과 모달 */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="modal-title" className="sr-only">
              {modal === 'success' ? '送信完了' : '送信失敗'}
            </h3>
            {modal === 'success' ? (
              <>
                <p className="mb-4 text-center text-lg font-medium text-black">
                  送信が完了しました。
                </p>
                <p className="mb-6 text-center text-sm text-zinc-600">
                  お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。
                </p>
              </>
            ) : (
              <>
                <p className="mb-4 text-center text-lg font-medium text-red-400">
                  送信に失敗しました。
                </p>
                <p className="mb-6 text-center text-sm text-zinc-600">
                  しばらく経ってから再度お試しいただくか、メールにてお問い合わせください。
                </p>
              </>
            )}
            <button
              type="button"
              onClick={() => setModal(null)}
              className="w-full rounded-full bg-amber-500 py-3 text-sm font-semibold text-black transition hover:bg-amber-600"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
