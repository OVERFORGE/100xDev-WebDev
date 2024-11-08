let currentClock;

function searchBackend() {
  console.log("Req sent to Backend");
}

function debouncedSearchBackend() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
