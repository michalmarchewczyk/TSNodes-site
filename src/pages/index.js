import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import heroIllustration from '../images/heroIllustration.svg';
import featIllustration1 from '../images/featIllustration1.svg';
import featIllustration2 from '../images/featIllustration2.svg';
import featIllustration3 from '../images/featIllustration3.svg';
import aboutIllustration from '../images/about.svg';
import logo from '../images/logo.svg';

import indexStyles from './index.module.scss';


const IndexPage = () => (
    <Layout>
        <SEO title='Home'/>
        <section className={indexStyles.hero}>
            <div>
                <h2>
                    An open source library for creating visual programming interfaces
                </h2>
                <Link to='/docs/quick-start'>
                    <button>
                        Get started
                    </button>
                </Link>
                <Link to='/#about'>
                    <button>
                        Learn more
                    </button>
                </Link>
            </div>
            <div>
                <img src={heroIllustration} alt=''/>
            </div>
        </section>
        <section className={indexStyles.section}>
            <div>
                <h2>
                    Node-based interfaces
                </h2>
                <p>
                    TSNodes library enables you to create node-based interfaces.
                </p>
            </div>
            <div>
                <img src={aboutIllustration} alt=''/>
            </div>
        </section>
        <section id='about' className={indexStyles.section}>
            <div>
                <h2>
                    About TSNodes
                </h2>
                <p>
                    TSNodes is a library written in TypeScript, which can be used in any TypeScript/JavaScript project.
                </p>
            </div>
            <div>
                <img src={logo} alt=''/>
            </div>
        </section>
        <section className={indexStyles.container}>
            <div>
                <img src={featIllustration1} alt=''/>
                <h3>
                    Open source
                </h3>
                <p>
                    TSNodes is a free library with open source code available to everyone to download, use, modify and contribute.
                </p>
            </div>
            <div>
                <img src={featIllustration2} alt=''/>
                <h3>
                    Easy to use
                </h3>
                <p>
                    TSNodes provides set of ease to use APIs with which you can create complex node editors with as little code as possible
                </p>
            </div>
            <div>
                <img src={featIllustration3} alt=''/>
                <h3>
                    Universal
                </h3>
                <p>
                    TSNodes supports JavaScript versions from EcmaScript 5. It can be used with every framework
                </p>
            </div>
        </section>
        <section className={indexStyles.container}>
            <h2>
                Get started
            </h2>
            <p>
                You can get started with TSNodes in just few minutes.
            </p>
        </section>
    </Layout>
);

export default IndexPage;
