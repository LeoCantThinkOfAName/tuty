import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./layouts/MainLayout";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <MainLayout />,
            children: [
              {
                path: "/",
                element: (
                  <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi officiis at illo vero blanditiis magni ipsa
                    temporibus, dolorum amet fuga id molestias architecto
                    laborum vitae delectus voluptate commodi quod provident
                    suscipit accusamus a laboriosam ut atque dolor. Esse
                    voluptatibus rem quo necessitatibus, repudiandae quibusdam
                    ipsam tempora magni beatae, reprehenderit quaerat rerum!
                    Obcaecati animi labore in officia, aspernatur at unde
                    temporibus eligendi, ad earum, officiis cum reiciendis optio
                    praesentium assumenda! Saepe officiis et, quo eveniet vel
                    similique at cum doloribus perspiciatis quisquam quos
                    tempora voluptates voluptatibus dolore iusto culpa vero
                    accusantium dolorum voluptas modi voluptatum. Nobis, eos
                    ipsum consequatur alias reprehenderit maiores enim! Ducimus
                    saepe sit deserunt tempora omnis dicta magni alias a, esse
                    maxime exercitationem eum, nulla est magnam officia pariatur
                    praesentium dolor obcaecati corporis voluptate. Officiis
                    maiores vitae cupiditate deserunt, eaque nisi aspernatur
                    laborum qui sunt consequatur minus explicabo a ad fugit
                    labore expedita distinctio quia tempore! Ullam odit ratione
                    similique excepturi aperiam repellendus necessitatibus
                    tempora ex consequuntur mollitia unde ipsum inventore ut
                    natus dolorum dolore laudantium quod, quis recusandae iure
                    tenetur expedita? Ad cupiditate magnam recusandae, alias eum
                    quaerat quo corrupti, non dolore placeat distinctio
                    aspernatur veniam. Ipsam, libero laudantium amet eveniet
                    deserunt corrupti quos commodi totam neque molestias optio
                    consequuntur aliquid, aperiam accusantium repellat incidunt!
                    Consequuntur culpa cumque enim voluptatibus quisquam
                    voluptatem autem fugiat excepturi corrupti deleniti quod
                    optio iure velit et doloribus, repellat ratione pariatur
                    ipsa rerum. Laborum unde dignissimos vitae, officia mollitia
                    sit quo maiores quasi alias nemo praesentium, quaerat atque
                    cupiditate magnam placeat voluptatum iusto! Impedit quidem
                    aperiam magni deserunt commodi eum vero, fugiat expedita
                    tempore dolore iusto unde, animi corrupti accusamus
                    explicabo, nostrum id illum iste! Dolorum sit odit sed saepe
                    fuga id officia, ab nulla necessitatibus quo commodi
                    repudiandae nemo rerum aperiam. Sequi nihil repellendus
                    beatae esse magnam sed, adipisci pariatur mollitia sit
                    inventore earum iste quasi, ad minima consequuntur est
                    dolores omnis perferendis labore. Quia autem hic porro
                    voluptates, eveniet explicabo! Quis, ratione expedita
                    possimus aut quod consequatur voluptatem est assumenda
                    vitae, vero corrupti dolores nam, deleniti cumque accusamus
                    quae nemo dicta quia error cupiditate aspernatur nobis.
                    Voluptatum itaque adipisci ipsum dolor totam nobis? Rerum at
                    similique hic nulla sapiente expedita alias, laborum
                    laudantium voluptatibus atque enim odit nesciunt facilis
                    soluta quas quibusdam impedit, omnis modi excepturi deserunt
                    autem molestiae necessitatibus! Ea, dolorem nisi molestias,
                    illo ex expedita quam laboriosam laudantium maiores
                    consequatur necessitatibus dignissimos veritatis quis rerum
                    voluptas sapiente neque similique libero voluptatibus sequi
                    explicabo? Molestiae, reprehenderit repellat perferendis
                    esse commodi ut officiis magnam in eos ad. Amet, saepe eum
                    minus consectetur porro error facere tempore dolorum.
                    Quisquam soluta nisi id obcaecati fuga repellendus minima
                    quos debitis, nulla ducimus eligendi ipsum praesentium ad
                    saepe ullam atque quaerat voluptas. Illo, quas recusandae
                    quis voluptas porro blanditiis magnam aut praesentium nihil
                    perferendis labore, possimus aliquid illum ratione
                    voluptatibus a quo eos excepturi. Deserunt magnam molestiae
                    eius quia reprehenderit quam mollitia illo ipsam. Ut ab
                    fugiat, consectetur atque corrupti natus ducimus laboriosam,
                    ipsum esse vero eum maiores cumque, nesciunt quos reiciendis
                    voluptatibus quaerat? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Earum ut vel quia aut eius
                    molestias doloribus, id a minus similique aliquid, suscipit
                    quasi magnam soluta aliquam dolorum et. Rem tenetur cumque
                    aperiam totam tempora? Rem animi ipsa quos aperiam totam
                    perferendis corporis id non doloribus, ex et quasi quibusdam
                    voluptates ullam quia sapiente! Incidunt consequatur
                    architecto tempora ad maiores dolor, dolorum quos ipsa
                    accusamus at voluptates omnis iste itaque odit nostrum
                    totam, eveniet optio! Magni iure mollitia sit placeat non
                    delectus blanditiis perferendis quos consequuntur quasi.
                    Assumenda sit consectetur molestiae voluptatum in debitis
                    sunt facere. Sint nam dignissimos qui quibusdam nesciunt
                    repellendus quam laboriosam consequuntur, tenetur, officia
                    saepe corporis eveniet est cupiditate labore sed numquam
                    asperiores fugiat velit atque. Tempora ea ratione vitae
                    minus adipisci! Dignissimos tenetur autem voluptatem libero
                    incidunt non voluptatibus odit deserunt ab, quo consequuntur
                    quod temporibus iste corrupti nisi veniam pariatur
                    doloremque at mollitia debitis ad dolor nobis, facere
                    recusandae! Fugit quos quas hic ipsum debitis odio possimus
                    suscipit aliquam est aspernatur veniam vitae aut facere
                    repellat, velit voluptatum dolorem minima deleniti, expedita
                    tempore inventore officiis, nostrum eligendi! Nam voluptatum
                    quibusdam aliquid doloribus perferendis. A distinctio nisi
                    ipsam labore perspiciatis? Quas iusto quo earum? Provident,
                    recusandae. Dolor architecto fuga esse distinctio, nam,
                    sint, perspiciatis numquam explicabo tenetur enim blanditiis
                    natus reiciendis ad cum nostrum tempore illo aperiam quasi
                    voluptatem suscipit fugiat! Nemo ipsum corporis est
                    laudantium praesentium recusandae veritatis fuga iusto cum
                    suscipit molestias nesciunt vero voluptatum voluptatem
                    temporibus odio expedita aliquam sunt eos dignissimos soluta
                    facilis, inventore qui! Neque itaque est error perferendis,
                    odit labore quis eum velit blanditiis expedita doloremque
                    impedit delectus maiores doloribus veniam aperiam, quam quos
                    natus voluptatibus non, aut totam explicabo optio. Dolorem
                    error tempora provident debitis, et quas eligendi molestias
                    consequuntur corporis consectetur sapiente impedit adipisci
                    dolor voluptas veritatis assumenda fugiat delectus dolorum
                    quaerat! Iure nemo velit non officiis quas eaque totam
                    architecto aperiam odio? Aperiam eum perferendis doloremque
                    voluptatibus accusamus dolorem incidunt, voluptate
                    aspernatur eos distinctio temporibus tempore aut consequatur
                    numquam alias nemo. Eum saepe eius itaque suscipit vel optio
                    ex sit error, at tempore cupiditate ea repellat
                    exercitationem nulla laboriosam unde! Architecto est, rerum
                    ducimus odit non sed doloremque nesciunt laborum beatae illo
                    quae fugit voluptates, consequatur error sequi cupiditate
                    sunt officia! Harum, nobis numquam nihil ratione libero
                    reiciendis. Eligendi illo veritatis eos aliquam voluptatibus
                    laboriosam molestias necessitatibus quam recusandae itaque
                    asperiores beatae, laudantium, praesentium at cumque
                    doloribus, debitis est dolor maiores odio. Mollitia ipsam,
                    cupiditate optio alias sapiente minus minima nisi maiores
                    facere error nulla, ipsum esse, molestias perferendis est
                    reiciendis illo repellat voluptatem ratione harum nam!
                    Fugiat, culpa, cum debitis excepturi placeat possimus
                    expedita quis eveniet, deserunt non aperiam quae voluptatem
                    iusto deleniti ipsum nostrum nobis tempore assumenda
                    perspiciatis consequatur delectus. Voluptate veniam quaerat
                    et sequi doloremque aliquid tempore pariatur perferendis
                    incidunt. Accusamus dolor porro quasi harum voluptates, cum
                    deleniti architecto ea? Odio, alias ipsa culpa, minima eum
                    harum doloribus, ea amet dolor sed enim laborum possimus
                    impedit? Reprehenderit laudantium accusamus, tempora
                    excepturi debitis ab dolores.
                  </>
                ),
              },
            ],
          },
        ])}
      ></RouterProvider>
    </ChakraProvider>
  );
};

export default App;
