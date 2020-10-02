import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import examplesStyles from './examples.module.scss';

import examplesIllustration from '../images/examplesIllustration.svg';

import {Link} from 'gatsby';

const Examples = () => (
    <Layout>
        <SEO title='Examples'/>
        <section className={examplesStyles.hero}>
            <div>
                <h2>
                    How TSNodes library is used in various applications
                </h2>
                <Link to='/#examples'>
                    <button>
                        See examples
                    </button>
                </Link>
            </div>
            <div>
                <img src={examplesIllustration} alt=''/>
            </div>
        </section>
        <section className={examplesStyles.section}>
            <h2>Demos</h2>
            <div className={examplesStyles.example}>
                <h3>
                    Demo - arithmetics
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
            <div className={examplesStyles.example}>
                <h3>
                    Demo - SQL query editor
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
        </section>
        <section className={examplesStyles.section}>
            <h2>Use cases</h2>
            <div className={examplesStyles.example}>
                <h3>
                    Procedural graphics editor
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
            <div className={examplesStyles.example}>
                <h3>
                    Machine learning
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
            <div className={examplesStyles.example}>
                <h3>
                    Use case 3
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
            <div className={examplesStyles.example}>
                <h3>
                    Use case 4
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae massa et libero consectetur ultricies ut ac eros. Fusce eu luctus nulla. Sed congue vestibulum felis id pretium. Aenean commodo velit a urna laoreet, sed mattis lacus consequat.
                </p>
                <div>
                    <a href='https://github.com/michalmarchewczyk'>
                        Open
                    </a>
                    <a href='https://github.com/michalmarchewczyk'>
                        Source code
                    </a>
                </div>
            </div>
        </section>
    </Layout>
);

export default Examples;
