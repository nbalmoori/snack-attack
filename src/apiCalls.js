// const data = {
//   prompt: "Write a poem about a dog wearing skis",
//   temperature: 0.5,
//   max_tokens: 64,
//   top_p: 1.0,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.0,
// }

// const getFetch = () => {
//   fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: 'Bearer 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',
//     },
//     body: JSON.stringify(data),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw Error(response.statustext)
//       } else {
//         return response.json()
//       }
//     })
//     .then(data => console.log(data.choices))
//     .catch(err => console.log(err))
// };

// export default getFetch;