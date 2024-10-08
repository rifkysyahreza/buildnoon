import HeaderNavigation from "@/components/HeaderNavigation/Index";
import Hero from "@/components/Hero/Index";

export default function Home() {
  return (
    <div className="">
      <HeaderNavigation></HeaderNavigation>
      <Hero></Hero>
      <div className=" h-screen">
        <section id="page1" className="active bg-white relative h-full w-full">
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            sequi quaerat officia non sunt sit, assumenda ullam itaque eos natus
            sed, aliquam adipisci consectetur nemo eum a reprehenderit fuga, ut
            consequatur beatae tenetur debitis. Officiis, quod vitae sapiente
            tempore odit, quas nemo minus cupiditate laboriosam et cum
            accusantium porro quam hic soluta? Blanditiis assumenda suscipit
            accusamus laborum modi, cumque consequatur velit asperiores eius
            consectetur deserunt fugiat aperiam recusandae quibusdam, dolore
            alias doloribus ut quis, voluptatem dolorum dolores harum unde
            magni. Commodi ducimus distinctio, quos ipsa, itaque illo nostrum
            laboriosam corporis sunt ad perferendis laborum ut natus magni
            dolore unde asperiores!
          </p>
        </section>

        <section id="page2" className="bg-white  relative h-full w-full">
          <h2>Section 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, consequuntur enim ab dolorem rem, animi voluptates
            ipsam sequi nisi, dolores quod. Unde molestias facere autem nam
            error laboriosam eum nisi! Placeat voluptatum voluptate aspernatur.
            Laboriosam nulla eaque culpa corporis consequuntur suscipit
            temporibus sed, totam, quia sit aut beatae sunt nihil ducimus fugit
            dolorum inventore minus dolorem modi eius! Aliquid distinctio sed
            dolorem? Quos ipsum optio fugit asperiores eligendi vitae saepe
            nostrum. Eius minus recusandae quaerat. Fuga inventore temporibus
            doloremque sequi officia voluptatibus explicabo ad? Distinctio
            molestiae cupiditate obcaecati eum consequatur, error, illo quidem,
            maxime expedita veniam assumenda alias culpa laudantium!
          </p>
        </section>
      </div>
    </div>
  );
}
