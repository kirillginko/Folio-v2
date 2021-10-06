import React from "react"

function Blur() {
  return (
    <div class="contet-page" data-scroll-section>
      <div class="list-main">
        <ul class="list-main__books">
          <li
            class="list-main__item blur-effect item-1"
            data-scroll
            data-scroll-delay="0.8"
            data-scroll-speed=".05"
            data-scroll-call="item-1"
          >
            The Good Old Days
          </li>
          <li
            class="list-main__item blur-effect item-2"
            data-scroll
            data-scroll-delay="0.6"
            data-scroll-speed=".05"
            data-scroll-call="item-2"
          >
            Jane Eyre
          </li>
          <li
            class="list-main__item blur-effect item-3"
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed=".05"
            data-scroll-call="item-3"
          >
            Pride and Prejudice
          </li>
          <li
            class="list-main__item blur-effect item-4"
            data-scroll
            data-scroll-delay="0.2"
            data-scroll-speed=".05"
            data-scroll-call="item-4"
          >
            Wuthering Heights
          </li>
          <li
            class="list-main__item blur-effect item-5"
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed=".05"
            data-scroll-call="item-5"
          >
            The Hobbit
          </li>
          <li
            class="list-main__item blur-effect item-6"
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed=".05"
            data-scroll-call="item-6"
          >
            Little Women
          </li>
          <li
            class="list-main__item blur-effect item-7"
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed=".05"
            data-scroll-call="item-7"
          >
            A Tale of Two Cities
          </li>
          <li
            class="list-main__item blur-effect item-8"
            data-scroll
            data-scroll-delay="0.02"
            data-scroll-speed=".05"
            data-scroll-call="item-8"
          >
            The Raven
          </li>
        </ul>
      </div>

      <div class="list-description">
        <ul>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-1)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-2)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-3)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-4)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
          <li class="blur-effect" data-scroll>
            <sup class="number-description">(00-5)</sup>
            <span class="text-description">
              Lorem Ipsum is simply dummy text.
            </span>
          </li>
        </ul>
      </div>
      <div class="text-content-page blur-effect" data-scroll>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  )
}

export default Blur
