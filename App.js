import { useEffect, useRef } from "react";

export default function App() {

  let content = `Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.Leite de capivaris, leite de mula manquis sem cabeça.

  Casamentiss faiz malandris se pirulitá.Diuretics paradis num copo é motivis de denguis.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Copo furadis é disculpa de bebadis, arcu quam euismod magna.
  
  Viva Forevis aptent taciti sociosqu ad litora torquent.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.
  
  Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Cevadis im ampola pa arma uma pindureta.Casamentiss faiz malandris se pirulitá.Sapien in monti palavris qui num significa nadis i pareci latim.
  
  Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Manduma pindureta quium dia nois paga.Si num tem leite então bota uma pinga aí cumpadi!Aenean aliquam molestie leo, vitae iaculis nisl.
  
  Atirei o pau no gatis, per gatis num morreus.Interagi no mé, cursus quis, vehicula ac nisi.A ordem dos tratores não altera o pão duris.In elementis mé pra quem é amistosis quis leo.
  
  In elementis mé pra quem é amistosis quis leo.Si num tem leite então bota uma pinga aí cumpadi!Copo furadis é disculpa de bebadis, arcu quam euismod magna.A ordem dos tratores não altera o pão duris.
  
  Delegadis gente finis, bibendum egestas augue arcu ut est.Casamentiss faiz malandris se pirulitá.Detraxit consequat et quo num tendi nada.Atirei o pau no gatis, per gatis num morreus.
  
  Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.In elementis mé pra quem é amistosis quis leo.
  
  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Paisis, filhis, espiritis santis.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Viva Forevis aptent taciti sociosqu ad litora torquent.
  
  Delegadis gente finis, bibendum egestas augue arcu ut est.Mé faiz elementum girarzis, nisi eros vermeio.Diuretics paradis num copo é motivis de denguis.Casamentiss faiz malandris se pirulitá.
  
  Cevadis im ampola pa arma uma pindureta.Detraxit consequat et quo num tendi nada.Casamentiss faiz malandris se pirulitá.Interagi no mé, cursus quis, vehicula ac nisi.
  
  Casamentiss faiz malandris se pirulitá.Atirei o pau no gatis, per gatis num morreus.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Si num tem leite então bota uma pinga aí cumpadi!
  
  Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Interagi no mé, cursus quis, vehicula ac nisi.
  
  Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Quem manda na minha terra sou euzis!Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Diuretics paradis num copo é motivis de denguis.
  
  Leite de capivaris, leite de mula manquis sem cabeça.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Manduma pindureta quium dia nois paga.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.`;
  const text = useRef();
  let speed = 70;

  let cont = 0;

  useEffect(() => {
    console.log(content.length)
    typeWriter();

  }, []);
  
  function typeWriter() {
    if(cont < content.length) {
      text.current.textContent += content.charAt(cont);
      cont++;
      setTimeout(typeWriter, speed);
    } else {
      text.current.content = '';
      cont = 0;
    }
  }
  
  
  return (
    <div ref={text}>
    </div>
  );
}