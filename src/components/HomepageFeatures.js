import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        SR-Accelerator was designed from the ground up to be easy and intuitive to use to speed up your systematic review.
      </>
    ),
  },
  {
    title: 'Eliminate Menial Tasks',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        SR-Accelerator lets you focus on the meaningful work, and we&apos;ll do the chores. Go
        ahead and try for yourself.
      </>
    ),
  },
  {
    title: 'Save Time',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Using SR-Accelerator could help reduce the workload of your Systematic Review by 20-50%
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
