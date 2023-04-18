import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Line,
  RiSearchLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";

function Tickets() {
  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-between gap-y-4 mb-10">
        <div className="">
          <h2 className="font-bold text-gray-100 text-xl">Overview</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="">-</span>
            <span className="">Support Center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Line className="" />
            Filter
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Create
          </button>
        </div>
      </div>

      {/* Portada */}

      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl mb-8">How Can We Help You?</h2>
          <form action="" className="">
            <div className="relative">
              <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                type="text"
                className="bg-secondary-900 outline-none py-2 pl-10 pr-4 rounded-lg placeholder:text-gray-500 w-full"
                placeholder="Ask a question"
              />
            </div>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img src="portada.svg" alt="" className="w-72 h-72 object-cover" />
        </div>
      </div>
      {/* Tabs  */}
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-br-lg rounded-bl-lg mb-8">
          <Tab.List className="flex items-center justify-between gap-2 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-primary ui-selected:text-black ui-selected:font-medium">
                Overview
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition- outline-none ui-selected:bg-primary ui-selected:text-black ui-selected:font-medium">
                Tickets
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-primary ui-selected:text-black ui-selected:font-medium">
                FAQ
              </Tab>
            </div>

            <div className="">
              <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
                Create
              </button>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white text-2xl">Popular Tickets</h2>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    Support <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">React</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Next.js</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Angular</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Bootstrap</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Laravel</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Vue</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-white text-2xl">FAQ</h2>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    All faqs <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">React</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Next.js</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Angular</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Bootstrap</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Laravel</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>

                <Disclosure>
                  <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                    <RiArrowRightSLine className="text-primary ui-open:rotate-90 ui-open:transform transition-all" />{" "}
                    Is team pricing available? <span className="bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg">Vue</span>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                      Yes! You can purchase a license that you can share with
                      your entire team. <Link to="/" className="text-primary hover:primrary/90 hover:underline transition-all">View more</Link>
                    </Disclosure.Panel>
                  </Transition>
                </Disclosure>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Tickets;
