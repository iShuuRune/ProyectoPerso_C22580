const movieData = {
            recommendedMovies: [
                { title: "Star Wars IV", rating: "8.2", image: "img/star-wars-iv.jpg" },
                { title: "Top Gun Maverick", rating: "8.6", image: "img/topgun-maverick.jpg" },
                { title: "Haikyuu Movie", rating: "8.9", image: "img/haikyuu-movie.jpg" },
                { title: "Maikol Yordan", rating: "8.2", image: "img/maikol-yordan.jpg" },
                { title: "Dune 2", rating: "8.1", image: "img/dune-2.jpg" },
                { title: "Avengers Endgame", rating: "8.1", image: "img/avengers-endgame.jpg" }
            ],
            popularSeries: [
                { title: "Clone Wars", rating: "8.9", image: "img/clone-wars.jpg" },
                { title: "Breaking Bad", rating: "7.9", image: "img/breaking-bad.jpg" },
                { title: "Diamond No Ace ACT II", rating: "9.4", image: "img/diamond-no-ace-act2.jpg" },
                { title: "Haikyuu S4", rating: "8.4", image: "img/haikyuu-s4.jpg" },
                { title: "The Boys", rating: "8.6", image: "img/the-boys.jpg" },
                { title: "Weak Hero", rating: "8.0", image: "img/weak-hero-1.jpg" }
            ],
            newReleases: [
                { title: "Great Pretender", rating: "9.2", image: "img/great-pretender.jpg" },
                { title: "Haikyuu S4", rating: "8.4", image: "img/haikyuu-s4.jpg" },
                { title: "Diamond No Ace ACT II", rating: "9.4", image: "img/diamond-no-ace-act2.jpg" },
                { title: "Top Gun Maverick", rating: "8.6", image: "img/topgun-maverick.jpg" },
                { title: "Weak Hero", rating: "8.0", image: "img/weak-hero-1.jpg" },
                { title: "Dune 2", rating: "8.1", image: "img/dune-2.jpg" }
            ],
            trendingNow: [
                { title: "Haikyuu Movie", rating: "8.9", image: "img/haikyuu-movie.jpg" },
                { title: "Maikol Yordan", rating: "8.2", image: "img/maikol-yordan.jpg" },
                { title: "Breaking Bad", rating: "7.9", image: "img/breaking-bad.jpg" },
                { title: "Great Pretender", rating: "9.2", image: "img/great-pretender.jpg" },
                { title: "Dune 2", rating: "8.1", image: "img/dune-2.jpg" },
                { title: "Haikyuu S4", rating: "8.4", image: "img/haikyuu-s4.jpg" }
            ]
        };

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

        function populateCategory(containerId, movies) {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = movies.map((movie, index) => createMovieCard(movie, index)).join('');
            }
        }

        function initApp() {
            populateCategory('recommended-movies', movieData.recommendedMovies);
            populateCategory('popular-series', movieData.popularSeries);
            populateCategory('new-releases', movieData.newReleases);
            populateCategory('trending-now', movieData.trendingNow);

            
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

        document.addEventListener('DOMContentLoaded', initApp);

        window.addEventListener('resize', function() {
            console.log('Window resized');
        });