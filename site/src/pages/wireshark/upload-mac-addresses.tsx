import Head from 'next/head';
import React, { ChangeEvent } from 'react';
import ReactPlayer from 'react-player';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

import { useAnalysis } from '@/context/analysis';

export default function Upload() {
  const {
    isSubmittingDataForAnalysis,
    submitDataForAnalysis,
    inputData,
    setMacAddressCSV,
  } = useAnalysis();

  const onUpload = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMacAddressCSV(e.target?.value);
  };

  const onSubmit = async () => {
    if (inputData?.macAddressCSV) {
      await submitDataForAnalysis();
      // window.location.replace('/analysis');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Upload Mac Address Data</title>
      </Head>
      <main>
        <section className='bg-white'>
          <div className='layout min-h-screen py-20 pb-10 text-black'>
            <h2 className='mt-8 text-2xl md:text-4xl'>
              Upload Mac Address Data
            </h2>
            <p className='text-md my-2 text-gray-800'>TODO: WRITE TEXT</p>
            <ReactPlayer
              width='100%'
              height='100%'
              url='/videos/save_mac_address_data.mp4'
              playing
              loop
              controls
            />
            <p className='text-md my-2 text-gray-800'>
              Once you have your CSV text copied, paste it here.
            </p>
            <div className='relative rounded-lg bg-gradient-to-r from-slate-100 to-cyan-200'>
              <textarea
                value={inputData?.macAddressCSV}
                onChange={onUpload}
                className='relative z-50 block h-full w-full p-2'
                rows={10}
              />
            </div>
            <Button
              {...(inputData?.macAddressCSV ? {} : { disabled: true })}
              {...(isSubmittingDataForAnalysis ? { loading: true } : {})}
              variant='primary'
              className='mt-4'
              onClick={onSubmit}
            >
              Submit for Analysis
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}