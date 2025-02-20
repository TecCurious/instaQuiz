
import { QuizResult } from "@/types/quize";
const isBrowser = typeof window !== 'undefined';

// Function to initialize the database
export function initializeDB(): Promise<IDBDatabase> {
  return new Promise<IDBDatabase>((resolve, reject) => {
    if (!isBrowser) {
      reject('IndexedDB is not available on the server');
      return;
    }

    const request: IDBOpenDBRequest = indexedDB.open('QuizDatabase', 1);
    
    request.onerror = (event: Event) => {
      reject(`Error opening database: ${(event.target as IDBOpenDBRequest).error}`);
    };
    
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      
      const objectStore: IDBObjectStore = db.createObjectStore('quizResults', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('timestamp', 'timestamp', { unique: false });
    };
    
    request.onsuccess = (event: Event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };
  });
}

// Function to add quiz data to the database
export function addQuizData(quizData: QuizResult): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (!isBrowser) {
      reject('IndexedDB is not available on the server');
      return;
    }

    initializeDB()
      .then((db: IDBDatabase) => {
        const transaction: IDBTransaction = db.transaction(['quizResults'], 'readwrite');
        const objectStore: IDBObjectStore = transaction.objectStore('quizResults');
        
       
        const dataToStore: QuizResult = {
          ...quizData,
          timestamp: new Date().toISOString()
        };
        
        const request: IDBRequest<IDBValidKey> = objectStore.add(dataToStore);
        
        request.onsuccess = (event: Event) => {
          const id = (event.target as IDBRequest<IDBValidKey>).result as number;
          resolve(id);
        };
        
        request.onerror = (event: Event) => {
          reject(`Error storing quiz data: ${(event.target as IDBRequest).error}`);
        };
        
        
        transaction.oncomplete = () => {
          db.close();
        };
      })
      .catch((error: Error) => reject(error.message));
  });
}

// Function to retrieve all quiz data
export function getAllQuizData(): Promise<QuizResult[]> {
  return new Promise<QuizResult[]>((resolve, reject) => {
    if (!isBrowser) {
      reject('IndexedDB is not available on the server');
      return;
    }

    initializeDB()
      .then((db: IDBDatabase) => {
        const transaction: IDBTransaction = db.transaction(['quizResults'], 'readonly');
        const objectStore: IDBObjectStore = transaction.objectStore('quizResults');
        const request: IDBRequest<QuizResult[]> = objectStore.getAll();
        
        request.onsuccess = (event: Event) => {
          resolve((event.target as IDBRequest<QuizResult[]>).result);
        };
        
        request.onerror = (event: Event) => {
          reject(`Error retrieving quiz data: ${(event.target as IDBRequest).error}`);
        };
        transaction.oncomplete = () => {
          db.close();
        };
      })
      .catch((error: Error) => reject(error.message));
  });
}