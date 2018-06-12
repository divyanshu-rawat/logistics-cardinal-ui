import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, number } from '@storybook/addon-knobs';

import withTests from '../../utils/withTests';

import { COMPONENTS } from '../../../.storybook/sections';

import Spinner from '.';
import Text from '../Text';

storiesOf(`${COMPONENTS}Spinner`, module)
  .addDecorator(
    withTests(
      'Spinner/tests/index',
      'Spinner/tests/Holder',
      'Spinner/tests/Overlay',
      'Spinner/tests/Wrapper',
    ),
  )
  .add(
    'Simple',
    withInfo()(() => (
      <Spinner spinWhen={boolean('Spin?', true)} size={number('Size', 50)}>
        <Text>
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis,
          nisi eros vermeio. Cevadis im ampola pa arma uma pindureta. Si u mundo
          tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta
          di mé, boa gentis num é. Todo mundo vê os porris que eu tomo, mas
          ninguém vê os tombis que eu levo! Delegadis gente finis, bibendum
          egestas augue arcu ut est. Vehicula non. Ut sed ex eros. Vivamus sit
          amet nibh non tellus tristique interdum. Manduma pindureta quium dia
          nois paga. Suco de cevadiss deixa as pessoas mais interessantis.
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo,
          vitae iaculis nisl. Nec orci ornare consequat. Praesent lacinia
          ultrices consectetur. Sed non ipsum felis. Diuretics paradis num copo
          é motivis de denguis. Atirei o pau no gatis, per gatis num morreus.
          Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna
          nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
          Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec leo
          commodo, ut interdum diam laoreet. Sed non consequat odio. Posuere
          libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit
          amet nisi. Em pé sem cair, deitado sem dormir, sentado sem cochilar e
          fazendo pose. Interagi no mé, cursus quis, vehicula ac nisi. Tá
          deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
          Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
          Leite de capivaris, leite de mula manquis sem cabeça. Aenean aliquam
          molestie leo, vitae iaculis nisl. Não sou faixa preta cumpadi, sou
          preto inteiris, inteiris. A ordem dos tratores não altera o pão duris.
          Viva Forevis aptent taciti sociosqu ad litora torquent. Interessantiss
          quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de
          cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
          fermentis. In elementis mé pra quem é amistosis quis leo. Copo furadis
          é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então
          bota uma pinga aí cumpadi! Detraxit consequat et quo num tendi nada.
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Per
          aumento de cachacis, eu reclamis. Praesent vel viverra nisi. Mauris
          aliquet nunc non turpis scelerisque, eget. Pra lá , depois divoltis
          porris, paradis. Quem manda na minha terra sou euzis! Paisis, filhis,
          espiritis santis. Sapien in monti palavris qui num significa nadis i
          pareci latim.
        </Text>
      </Spinner>
    )),
  );
