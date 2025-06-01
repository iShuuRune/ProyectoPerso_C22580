const movieData = {
            recommendedMovies: [
                { title: "Violent Night", rating: "7.9", image: "https://images.unsplash.com/photo-1489599510392-4c7c3e0b3b4e?w=300&h=450&fit=crop" },
                { title: "Megan", rating: "7.9", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop" },
                { title: "Avatar", rating: "8.5", image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop" },
                { title: "Top Gun", rating: "8.2", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=300&h=450&fit=crop" },
                { title: "Dune", rating: "8.0", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop" }
            ],
            popularSeries: [
                { title: "Westworld", rating: "7.9", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop" },
                { title: "Servant", rating: "7.9", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" },
                { title: "Wednesday", rating: "7.9", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=450&fit=crop" },
                { title: "Severance", rating: "8.7", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop" },
                { title: "House of Dragon", rating: "8.5", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" }
            ],
            newReleases: [
                { title: "The Menu", rating: "7.2", image: "https://images.unsplash.com/photo-1564424275557-cc4a86d0c8e5?w=300&h=450&fit=crop" },
                { title: "Glass Onion", rating: "7.1", image: "https://images.unsplash.com/photo-1489599510392-4c7c3e0b3b4e?w=300&h=450&fit=crop" },
                { title: "The Whale", rating: "7.7", image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300&h=450&fit=crop" },
                { title: "Babylon", rating: "7.3", image: "https://images.unsplash.com/photo-1478720568477-b0ac8c35ad99?w=300&h=450&fit=crop" },
                { title: "The Fabelmans", rating: "7.5", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" }
            ],
            trendingNow: [
                { title: "Stranger Things", rating: "8.7", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop" },
                { title: "The Bear", rating: "8.6", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" },
                { title: "Euphoria", rating: "8.4", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=450&fit=crop" },
                { title: "The Last of Us", rating: "9.0", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop" },
                { title: "Wednesday", rating: "8.1", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" }
            ]
        };

        // Function to create movie card HTML
        function createMovieCard(movie, index) {
            return `
                <div class="movie-card" style="animation-delay: ${index * 0.1}s">
                    <div class="movie-poster">
                        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
                        <div class="rating">${movie.rating}</div>
                    </div>
                    <div class="movie-title">${movie.title}</div>
                </div>
            `;
        }

        // Function to populate a category
        function populateCategory(containerId, movies) {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = movies.map((movie, index) => createMovieCard(movie, index)).join('');
            }
        }

        // Initialize the app
        function initApp() {
            populateCategory('recommended-movies', movieData.recommendedMovies);
            populateCategory('popular-series', movieData.popularSeries);
            populateCategory('new-releases', movieData.newReleases);
            populateCategory('trending-now', movieData.trendingNow);

            // Add click event listeners to movie cards
            document.querySelectorAll('.movie-card').forEach(card => {
                card.addEventListener('click', function() {
                    const title = this.querySelector('.movie-title').textContent;
                    alert(`Playing: ${title}`);
                });
            });

            // Add search functionality
            const searchInput = document.querySelector('.search-input');
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                // Simple search implementation - in a real app, this would filter content
                console.log('Searching for:', searchTerm);
            });

            // Add navigation functionality
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Add desktop navigation functionality
            document.querySelectorAll('.desktop-nav a').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.desktop-nav a').forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Add horizontal scroll functionality for touch devices
            document.querySelectorAll('.movies-grid').forEach(grid => {
                let isDown = false;
                let startX;
                let scrollLeft;

                grid.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - grid.offsetLeft;
                    scrollLeft = grid.scrollLeft;
                    grid.style.cursor = 'grabbing';
                });

                grid.addEventListener('mouseleave', () => {
                    isDown = false;
                    grid.style.cursor = 'grab';
                });

                grid.addEventListener('mouseup', () => {
                    isDown = false;
                    grid.style.cursor = 'grab';
                });

                grid.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - grid.offsetLeft;
                    const walk = (x - startX) * 2;
                    grid.scrollLeft = scrollLeft - walk;
                });
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);

        // Handle window resize for responsive behavior
        window.addEventListener('resize', function() {
            // Adjust layout if needed
            console.log('Window resized');
        });