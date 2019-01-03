import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ProductItem from '../ProductItem/index'
import { Parallax } from 'react-scroll-parallax'
import pizza1 from '../../static/pizza1.jpg'
import pizza2 from '../../static/pizza2.jpg'
import pizza3 from '../../static/pizza3.jpg'
import pizza4 from '../../static/pizza4.jpg'
import pizza5 from '../../static/pizza5.jpg'
import pizza6 from '../../static/pizza6.jpg'
import pizza7 from '../../static/pizza7.jpg'
import pizza8 from '../../static/pizza8.jpg'
import pizza9 from '../../static/pizza9.jpg'
import pizza10 from '../../static/pizza10.jpg'
import pizza11 from '../../static/pizza11.jpg'
import pizza12 from '../../static/pizza12.jpg'
import pizza13 from '../../static/pizza13.jpg'
import pizza14 from '../../static/pizza14.jpg'
import './styles.css'

class ProductsContainer extends Component {
  render() {
    return (
      <div className="products">
        <div className="products-bg">
        </div>
        <div className="products-bg2">
        </div>
        <Element name="test" className="inner">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Маргарита Classico Italiano"
                    text="Классическая Итальянская пицца( томатный соус, моцарелла, помидоры, маслины)"
                    cost={90}
                    imgSrc={pizza1}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={40}
                offsetYMin={-40}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="4 Мяса Demone di carne"
                    text="Томатный соус, моцарелла, бекон, ветчина, салями Чоризо, говядина, руккола и пармезан."
                    cost={160}
                    imgSrc={pizza2}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={60}
                offsetYMin={-60}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Курица ананас Tropicale"
                    text="Томатный соус, моцарелла, курица, ананас."
                    cost={120}
                    imgSrc={pizza3}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={60}
                offsetYMin={-60}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Морепродукты Paradiso del mare"
                    text="Томатный соус, моцарелла, кальмар, мидия, креветка, осьминог, маслины, лимон."
                    cost={160}
                    imgSrc={pizza4}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={40}
                offsetYMin={-40}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Вегетарианская Bomba vegetale"
                    text="Томатный соус, моцарелла, кабачок, баклажан, грибы, лук, шпинат, оливки, маслины, сладкий перец и помидоры."
                    cost={110}
                    imgSrc={pizza5}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="4 Сыра Quattro formaggi"
                    text="Томатный соус, моцарелла, дорблю, пармезан, камембер."
                    cost={150}
                    imgSrc={pizza6}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Кальцоне Bravo Bombino (закрытая пицца)"
                    text="Томатный соус, моцарелла, грибы, бекон, маслины, лук, сладкий перец."
                    cost={110}
                    imgSrc={pizza7}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={40}
                offsetYMin={-40}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Пицца с красной рыбой Sapore do mare"
                    text="Белый соус, моцарелла, филе красной рыбы, лук порей, оливки."
                    cost={170}
                    imgSrc={pizza8}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={60}
                offsetYMin={-60}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Ветчина грибы Braconiere"
                    text="Томатный соус, моцарелла, грибы, ветчина, маслины."
                    cost={130}
                    imgSrc={pizza9}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={60}
                offsetYMin={-60}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Пицца с козьим сыром Bello Locate"
                    text="Белый соус, козий сыр, яблоко, мёд, руккола."
                    cost={150}
                    imgSrc={pizza10}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={40}
                offsetYMin={-40}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Салями Escorpion"
                    text="Томатный соус, моцарелла, чоризо, перец чили хабанеро, пармезан."
                    cost={120}
                    imgSrc={pizza11}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Пицца Карбонара Carbonara"
                    text="Белый соус, моцарелла, яйцо, бекон, пармезан, перец чёрный молотый."
                    cost={130}
                    imgSrc={pizza12}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={60}
                offsetYMin={-60}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Пицца банан шоколад Sorpresa"
                    text="Белый соус(сладкий), банан, шоколад."
                    cost={90}
                    imgSrc={pizza13}
                />
            </Parallax>
            <Parallax
                className="custom-class"
                offsetYMax={40}
                offsetYMin={-40}
                // slowerScrollRate
                tag="figure"
            >
                <ProductItem
                    name="Пицца яблоко корица Il gusto"
                    text="Белый соус(сладкий), яблоко, корица."
                    cost={90}
                    imgSrc={pizza14}
                />
            </Parallax>
        </Element>
      </div>
    )
  }
}

export default ProductsContainer
