import { Button, Container, Divider, Rating } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box, styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75", //หลังจากกดแล้ว
  },
  "& .MuiRating-iconHover": {
    color: "#0078FF", //ที่ชี้อยู่
  },
});

function Detail() {
  return (
    <>
      <Container sx={{ width: "80vw" }}>
        <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
          <img
            style={{ width: 400, height: 350 }}
            src="https://facts.net/wp-content/uploads/2023/09/17-facts-about-kirigaya-kirito-kazuto-sword-art-online-1693629433.jpg"
            alt=""
          />
          <Box display={"flex"} flexDirection={"column"}>
            <h2 style={{ margin: 0 }}>Kirigaya Kazuto</h2>
            <Divider sx={{ width: "100%", bgcolor: "gray", my: 2 }} />
            <h3 style={{ margin: 0 ,fontSize : 22,}}>record</h3>
            <p >
            Kazuto Kirigaya (桐ヶ谷 和人, Kirigaya Kazuto), born as Kazuto
            Narusaka (鳴坂 和人, Narusaka Kazuto), is a fictional character and
            the protagonist of the Sword Art Online series of light novels
            written by Reki Kawahara. Known by a portmanteau of his name, Kirito
            (キリト) which is his user name in the Sword Art Online video game
            which the series are partially set in. Kirito is a teenager who was
            chosen as one of 1,000 beta testers for a new virtual reality video
            game: Sword Art Online. After the game is released to the general
            public, he and the rest of the 10,000 players discover that they are
            unable to log out and are trapped in the simulation unless they
            manage to beat the game. In the anime adaptation, Kirito is voiced
            in Japanese by Yoshitsugu Matsuoka and in English by Bryce
            Papenbrook.
            </p>
          </Box>
        </Box>
        <br />
        <Box display={"flex"} flexDirection={"row"} sx={{ gap: 4, mx: 3 }}>
          <iframe
            style={{ width: 1000 }}
            width="600"
            height="315"
            src="https://www.youtube.com/embed/IycVW5bCvSY?si=eFlXhoATWVW-L4aC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Box width={"100%"} display={"flex"} flexDirection={"column"}>
            <h2>Personality</h2>
            <p>
            In an interview with Sword Art Online series creator Reki Kawahara,
            they wrote the series to change popular opinion of online gaming;
            viewing it not a social ill or just an escape from real life, and
            thus decided to show games in a more positive light in his light
            novels. He stated that he does not usually put aspects of himself
            into his characters, he did note that "neither of us are good at
            forming parties. We tend to play solo in these games a lot." When
            asked about Kirito.
            </p>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} sx={{}}>
          <Divider sx={{ width: "100%", bgcolor: "gray", my: 2 }} />
          <h4>Comment</h4>
          <TextField fullWidth rows={2} multiline defaultValue="Progress, not perfection."></TextField>
          <br />
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} sx={{margin : 0, marginBottom : 1}}>
            <StyledRating
              defaultValue={0}
              //precision={0}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
            <Button sx={{bgcolor : "#0078FF",color : "#F4FFFF"}}>Send</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Detail;
