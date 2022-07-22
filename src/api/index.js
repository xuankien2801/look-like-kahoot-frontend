import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:3012/api" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `${
      JSON.parse(localStorage.getItem("profile")).accessToken
    }`
  }
  return req
})


// API.interceptors.response.use((res) => {
//   console.log(res);
//   if (res.status==401)
//   API.post('/auth/refresh', {
//     accessToken: JSON.parse(localStorage.getItem("profile")).accessToken,
//     refreshToken: JSON.parse(localStorage.getItem("profile")).refreshToken
//   }).then(response => {
//     localStorage.setItem("profile", JSON.stringify({ ...response?.data }))
//     return res
//   })
// })

export const fetchUsers = () => API.get("/users")
export const createUser = (newUser) => API.post("/users", newUser)
export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser)
export const deleteUser = (id) => API.delete(`/users/${id}`)

export const fetchQuizes = () => API.get("/quiz")
export const fetchPublicQuizes = (page) =>
  API.get(`/quiz/public?page=${page}`)
export const fetchQuizesBySearch = (searchQuery) =>
  API.get(
    `/quiz/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  )
export const fetchTeacherQuizes = (teacherId) =>
  API.get(`/quiz/teacher/${teacherId}`)
export const fetchQuestions = (quizId) => API.get(`/quiz/${quizId}`)
export const createQuiz = (newQuiz) => API.post("/quiz", newQuiz)
export const createQuestion = (quizId, newQuestion) =>
  API.post(`/quiz/${quizId}/questions`, newQuestion)
export const updateQuestion = (quizId, questionId, updatedQuestion) =>
  API.patch(`/quiz/${quizId}/questions/${questionId}`, updatedQuestion)
export const updateQuiz = (id, updatedQuiz) =>
  API.patch(`/quiz/${id}`, updatedQuiz)
export const deleteQuiz = (id) => API.delete(`/quiz/${id}`)
export const likeQuiz = (id) => API.patch(`/quiz/${id}/likeQuiz`)
export const commentQuiz = (comment, id) =>
  API.post(`/quiz/${id}/commentQuiz`, { comment })
export const fetchQuiz = (id) => API.get(`/quiz/${id}`, id)

export const createGame = (newGame) => API.post("/games", newGame)
export const fetchGame = (id) => API.get(`/games/${id}`, id)
export const addPlayer = (gameId, playerId) =>
  API.patch(`/games/${gameId}/players`, { playerId })

export const createPlayerResult = (newPlayerResult) =>
  API.post("/playerResults", newPlayerResult)
export const fetchPlayerResult = (id) => API.get(`/playerResults/${id}`, id)
export const addAnswer = (newAnswer, id) =>
  API.patch(`/playerResults/${id}/answers`, { newAnswer })

export const createLeaderboard = (newLeaderboard) =>
  API.post("/leaderboard", newLeaderboard)
export const fetchLeaderboard = (id) => API.get(`/leaderboard/${id}`, id)
export const addPlayerResult = (playerResult, id) =>
  API.patch(`/leaderboard/${id}/playerresult`, playerResult)
export const updateQuestionLeaderboard = (questionResult, id) =>
  API.patch(`/leaderboard/${id}/questionleaderboard`, questionResult)
export const updateCurrentLeaderboard = (result, id) =>
  API.patch(`/leaderboard/${id}/currentleaderboard`, result)

const AUTH_API = axios.create({ baseURL: "http://localhost:3012/api/auth" })

// AUTH_API.interceptors.response.use((res) => {
//   console.log(res);
//   if (res.status==401)
//   API.post('/auth/refresh', {
//     accessToken: JSON.parse(localStorage.getItem("profile")).accessToken,
//     refreshToken: JSON.parse(localStorage.getItem("profile")).refreshToken
//   }).then(response => {
//     localStorage.setItem("profile", JSON.stringify({ ...response?.data }))
//     return res
//   })
// })

export const login = (formData) => AUTH_API.post("/login", formData)
export const register = (formData) => AUTH_API.post("/register", formData)

