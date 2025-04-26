# AI Safety Incident API

This is my HumanChain Backend Intern take-home project. It’s a simple API for logging AI safety incidents using Node.js and MongoDB. You can add, view, and delete incidents. Here’s how to set it up and test it.

## Tech Used
- Node.js
- Express
- MongoDB
- Mongoose

## What You Need
- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- npm
- VS Code with Thunder Client (optional, for testing)

## Setup
1. **Get the code**:
   - Unzip the folder or clone it:
     ```bash
     git clone <repo-url>
     cd ai-safety-incident-api
     ```

2. **Install stuff**:
   ```bash
   npm install
   ```

3. **MongoDB**:
   - **Local**: Install MongoDB, start it (`mongod`), use `mongodb://localhost:27017/ai_safety_db`.
   - **Atlas**: Get a connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create `.env`:
     ```env
     MONGODB_URI=your-connection-string
     PORT=3000
     ```
     - Copy `.env.example`: `cp .env.example .env`.

4. **Add sample data** (optional):
   - Run:
     ```bash
     npm run seed
     ```
   - Adds 3 incidents: “AI Error” (Low), “Crash” (High), “Bias Issue” (Medium).

5. **Run it**:
   ```bash
   npm start
   ```
   - Or: `npm run dev` (auto-restarts).
   - API runs at `http://localhost:3000`.

## Testing
Test endpoints at `http://localhost:3000/incidents`. Use **Thunder Client** in VS Code or `curl`.

- **Thunder Client**:
  - Install Thunder Client extension in VS Code.
  - Open it (lightning bolt icon).
  - Create requests:
    - **GET /incidents**: Set URL to `http://localhost:3000/incidents`, method GET.
    - **POST /incidents**: Set URL, method POST, JSON body like `{"title":"Test","description":"Issue","severity":"Low"}`.
    - **GET /incidents/:id**: Use URL like `http://localhost:3000/incidents/<id>`, method GET.
    - **DELETE /incidents/:id**: Same URL, method DELETE.
  - Click Send to test. Check status (e.g., 200, 201) and JSON response.

### Endpoint Examples (curl)
- **GET /incidents** (get all):
  ```bash
  curl http://localhost:3000/incidents
  ```
  ```json
  [{"id":"1234","title":"AI Error","description":"Wrong output given","severity":"Low","reported_at":"2025-04-01T10:00:00Z"},...]
  ```

- **POST /incidents** (add new):
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"title":"New","description":"Issue","severity":"Medium"}' http://localhost:3000/incidents
  ```
  ```json
  {"id":"5678","title":"New","description":"Issue","severity":"Medium","reported_at":"2025-04-02T12:00:00Z"}
  ```

- **GET /incidents/:id** (get one):
  ```bash
  curl http://localhost:3000/incidents/1234
  ```
  ```json
  {"id":"1234","title":"AI Error","description":"Wrong output given","severity":"Low","reported_at":"2025-04-01T10:00:00Z"}
  ```

- **DELETE /incidents/:id** (delete):
  ```bash
  curl -X DELETE http://localhost:3000/incidents/1234
  ```
  (Returns 204, no body)

## Database
- Schema in `models/incident.js`:
  - `title`: String, required
  - `description`: String, required
  - `severity`: String (“Low”, “Medium”, “High”)
  - `reported_at`: Date, auto-set
- Connects via `MONGODB_URI` in `.env`.
- Seed script (`npm run seed`) adds sample data.

## Notes
- Picked MongoDB because it’s good with JSON. Mongoose made validation easy.
- Split routes and controllers to keep things organized.
- `severity` validation was a bit tough, but Mongoose’s `enum` worked great.

## Submit
- Zip without `node_modules` or `.env`.
- Or share GitHub repo link.

Hope it works for you! Had a good time building it.