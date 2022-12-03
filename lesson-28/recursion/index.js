const favorites = ['id-2', 'id-5'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-3',
          name: 'Drink',
          nodes: [
            {
              id: 'id-5',
              name: 'Kola',
              nodes: [
                {
                  id: 'id-7',
                  name: 'Zero',
                  nodes: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));
