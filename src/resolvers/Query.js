Query: {
  // info: () => `This is the API of a Hackernews clone`,
  feed: (root, args, context, info) => {
    return context.prisma.links();
  };
}

function feed(parent, args, context, info) {
  return context.prisma.links();
}

module.exports = {
  feed
};
