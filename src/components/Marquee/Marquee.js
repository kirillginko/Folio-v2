import React from "react"

function Marquee() {
  return (
    <>
      <section class="c-section" data-scroll-section>
        <div class="o-container" id="scroll-direction">
          <div class="c-direction-block_wrapper">
            <div
              class="c-section_infos -padding"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#scroll-direction"
            >
              <div class="c-section_infos_inner" data-scroll>
                <h3>
                  02. <br>Scroll direction</br>
                </h3>
                <div class="c-sections_infos_text u-text">
                  <p>
                    And if that wasn't enough, make 'em go backwards. Or
                    upwards. Or downwards!
                  </p>
                </div>
              </div>
            </div>
            <div class="c-direction-block" id="direction">
              <div class="c-direction-block_item -one">
                <span
                  class="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="6"
                  data-scroll-target="#direction"
                >
                  I'm moving in this direction
                </span>
              </div>
              <div class="c-direction-block_item -two">
                <span
                  class="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-8"
                  data-scroll-target="#direction"
                >
                  And in this direction
                </span>
              </div>
              <div class="c-direction-block_item -three">
                <span
                  class="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="9"
                  data-scroll-target="#direction"
                  data-scroll-delay="0.05"
                >
                  Sooo customizable. Right?
                </span>
              </div>
              <div class="c-direction-block_item -four">
                <span
                  class="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="15"
                  data-scroll-target="#direction"
                >
                  I can also go in this direction
                </span>
              </div>
              <div class="c-direction-block_item -five">
                <span
                  class="c-direction-block_item_inner"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-20"
                  data-scroll-target="#direction"
                  data-scroll-delay="0.05"
                >
                  Ok, enough!!!!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Marquee
