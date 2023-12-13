
import { Web5 } from "@web5/api";
//  console.log('this is in query local protocol')
const queryLocalProtocol = async (web5) => {
  return await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: 'https://airrove/tickets',
      },
    },
  });
};

//console.log('this is where Query remote protocol is')
const queryRemoteProtocol = async (web5, did) => {
  return await web5.dwn.protocols.query({
    from: did,
    message: {
      filter: {
        protocol: 'https://airrove/tickets',
      },
    },
  });
};

// console.log('this is where we install local protocol')
const installLocalProtocol = async (web5, protocolDefinition) => {
  return await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
};

//  console.log('this is where we install remote protocol')
const installRemoteProtocol = async (web5, did, protocolDefinition) => {
  const { protocol } = await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
  return await protocol.send(did);
};

export const defineNewProtocol = () => {
  return {
    protocol: 'https://airrove/tickets',
    published: true,
    types: {
      publishedTickets: {
        schema: 'https://schema.org/TravelAction',
        dataFormats: ['application/json'],
      },
      userTickets: {
        schema: 'https://schema.org/TravelAction',
        dataFormats: ['application/json'],
      },
    },
    structure: {
      publishedTickets: {
        $actions: [
          { who: 'anyone', can: 'read' },
          { who: 'author', of: 'publishedTickets', can: 'write' },
        ],
      },
      userTickets: {
        $actions: [
          { who: 'author', of: 'userTickets', can: 'read' },
          { who: 'recipient', of: 'userTickets', can: 'read' },
          { who: 'anyone', can: 'write' },
        ],
      },
    },
  };
};

export const configureProtocol = async (web5, did) => {
  const protocolDefinition = defineNewProtocol();
  const protocolUrl = protocolDefinition.protocol;

  const { protocols: localProtocols, status: localProtocolStatus } =
    await queryLocalProtocol(web5, protocolUrl);
  if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
    const result = await installLocalProtocol(web5, protocolDefinition);
    console.log({ result });
    console.log('Protocol installed locally');
  }

  const { protocols: remoteProtocols, status: remoteProtocolStatus } =
    await queryRemoteProtocol(web5, did, protocolUrl);
  if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
    const result = await installRemoteProtocol(web5, did, protocolDefinition);
    console.log({ result });
    console.log('Protocol installed remotely');
  }
};




