import  { useEffect, useState } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent 
} from "@mui/material";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/quotes ");

      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log("error fetching data");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Quote Generator
          </Typography>
          <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
            "{quote}"
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            — {author}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={fetchQuote}
          >
            New Quote
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Quote;





