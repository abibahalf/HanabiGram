import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListPost from "../../components/ListPost";

const index = () => {
  const posts = [
  {
    id: "1",
    username: "alexandra",
    avatar: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/id/1011/600/800",
    caption: "Menikmati keindahan alam dan udara segar 🌿",
  },
  {
    id: "2",
    username: "budi_santoso",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "https://picsum.photos/id/1015/600/800",
    caption: "Petualangan baru, pengalaman baru! 🏔️",
  },
  {
    id: "3",
    username: "citra.daily",
    avatar: "https://i.pravatar.cc/150?img=5",
    image: "https://picsum.photos/id/1027/600/800",
    caption: "Hari yang indah dimulai dengan senyuman ☀️",
  },
  {
    id: "4",
    username: "dimas_dev",
    avatar: "https://i.pravatar.cc/150?img=13",
    image: "https://picsum.photos/id/0/600/800",
    caption: "Coding, coffee, repeat. ☕💻",
  },
  {
    id: "5",
    username: "ella.travels",
    avatar: "https://i.pravatar.cc/150?img=9",
    image: "https://picsum.photos/id/1039/600/800",
    caption: "Menyimpan kenangan di setiap perjalanan ✈️",
  },
  {
    id: "6",
    username: "fajar_photo",
    avatar: "https://i.pravatar.cc/150?img=14",
    image: "https://picsum.photos/id/1040/600/800",
    caption: "Menangkap momen, mengabadikan cerita 📸",
  },
  {
    id: "7",
    username: "gina.lifestyle",
    avatar: "https://i.pravatar.cc/150?img=20",
    image: "https://picsum.photos/id/1060/600/800",
    caption: "Slow down and enjoy the little things 🌸",
  },
  {
    id: "8",
    username: "hendra_fit",
    avatar: "https://i.pravatar.cc/150?img=15",
    image: "https://picsum.photos/id/1058/600/800",
    caption: "Satu langkah lebih dekat menuju tujuan 💪",
  },
  {
    id: "9",
    username: "intan.foodie",
    avatar: "https://i.pravatar.cc/150?img=25",
    image: "https://picsum.photos/id/1080/600/800",
    caption: "Makanan enak selalu memperbaiki suasana hati 🍜",
  },
  {
    id: "10",
    username: "jordan.explore",
    avatar: "https://i.pravatar.cc/150?img=18",
    image: "https://picsum.photos/id/1005/600/800",
    caption: "Collect moments, not things. 🌍",
  },
];


  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }) => <ListPost item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default index;
