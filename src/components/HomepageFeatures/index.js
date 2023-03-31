import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Описание профессии',
        description: (
            <>
                Кто такой Delivery Manager. Какие задачи выполняет. Как им стать
            </>
        ),
    },
    //{
    //    title: 'Карта развития',
    //    description: (
    //        <>
    //            Поможет понять что должен знать и уметь Delivery Manager, составить план развития, найти инструмент под конкретную задачу
    //        </>
    //    ),
    //},
];

function Feature({title, description}) {
    return (
        <div className={clsx('col col--6')}>
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
