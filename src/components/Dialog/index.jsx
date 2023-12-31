import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/outline';

export const DefaultDialog = ({ children, close, open }) => {

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={close} className="fixed inset-0 left-0 z-20 overflow-y-auto">
        <div className="flex h-screen items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-[250ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="flex fixed h-full inset-0 bg-black backdrop-filter backdrop-blur-sm bg-opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-[250ms]"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="flex flex-col fixed rounded-xl p-6">
                <button
                  className="flex absolute self-end ring-0 border-none rounded-full z-[21] p-1 mt-4 mr-1 bg-black bg-opacity-60 hover:bg-opacity-40" 
                  onClick={close}
                >
                  <XCircleIcon width="32" height="32" color="#FFFFFF" strokeWidth={2} />
                </button>
             {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
