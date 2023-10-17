import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react'
import { Cat } from '../../module/Cat';

import './CardCat.css';

type CatProps = Cat

export const CardCat: React.FC<CatProps> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.name}</IonCardTitle>
      </IonCardHeader>
      <img src={props.image} alt={props.name} />
      <IonCardContent className='card__content'>
        <div className="card__content--footer">
          <b>{props.origin}</b>
          <b>{props.temperament.split(',')[0]}</b>
        </div>
      </IonCardContent>
    </IonCard>
    // <div className='card'>
    //   <div className="card__header">
    //     {props.name}
    //   </div>
    //   <div className="card__body">
    //     <img src={props.image} alt={props.name} />
    //     <p>{props.description}</p>
    //   </div>
    //   <div className="card__footer">
    //     <div>{props.origin}</div>
    //     <div>{props.temperament}</div>
    //   </div>
    // </div>
  )
}
