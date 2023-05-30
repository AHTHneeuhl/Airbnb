import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const FavoritePage = async () => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="You must be logged in to view this page"
        />
      </ClientOnly>
    );
  }

  if (!favorites.length)
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites"
          subtitle="Looks like you have no favorites listings"
        />
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
