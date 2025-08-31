import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    "Charu Dhingra is a data scientist, machine learning engineer, and full- stack engineer.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">A Quick Intro</Link>
            </h2>
           
          </div>
           
        </header>
        <p>

            <b>Hello and welcome—</b>I’m Charu Dhingra.
            With over 13.5 years of experience in IT, I specialize in building and delivering impactful data solutions at the intersection of Data Governance and Database Engineering.

Throughout my career, I’ve worked extensively with Informatica’s Data Governance & Data Quality suite (Axon, EDC, Metadata Manager, DPM), helping organizations establish robust frameworks for data trust, lineage, and compliance. On the engineering side, I bring strong hands-on expertise in ETL development, SQL Server BI (SSIS/SSRS), and enterprise database design across SQL Server, Oracle, and Teradata.

I’m passionate about shaping data ecosystems that are trustworthy, accessible, and well-governed—bridging the gap between technology and business needs to drive long-term value.
        </p>
        <p>
          {' '}
          Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view <Link href="/stats">site statistics</Link>,
          or <Link href="/contact">contact</Link> me.
        </p>
        
      </article>
    </PageWrapper>
  );
}
